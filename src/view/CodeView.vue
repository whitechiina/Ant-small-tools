<template>
  <div>
    <title-component :title="title" />
    <div class="code-panel">
      <!-- 编辑 -->
      <textarea ref="textarea" v-model="code"></textarea>
      <!-- 操作 -->
      <div class="operation">
        <a-button class="item" @click="run">运行</a-button>
        <a-button class="item" @click="clear">清空</a-button>
        <a-button class="item" @click="close">折叠</a-button>
      </div>
      <div class="console-warp" v-show="dlogVisible">
        <div class="logs" v-for="(item, index) in logs" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleComponent from '../components/Title.vue'
  // 引入全局实例
  import _CodeMirror from 'codemirror'
  // 核心样式
  import 'codemirror/lib/codemirror.css'
  // 引入主题后还需要在 options 中指定主题才会生效
  import 'codemirror/theme/cobalt.css'

  // 需要引入具体的语法高亮库才会有对应的语法高亮效果
  // codemirror 官方其实支持通过 /addon/mode/loadmode.js 和 /mode/meta.js 来实现动态加载对应语法高亮库
  // 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/mode/css/css.js'
  import 'codemirror/mode/xml/xml.js'
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/mode/markdown/markdown.js'
  import 'codemirror/mode/python/python.js'
  import 'codemirror/mode/r/r.js'
  import 'codemirror/mode/shell/shell.js'
  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/mode/swift/swift.js'
  import 'codemirror/mode/vue/vue.js'

  // 尝试获取全局实例
  const CodeMirror = window.CodeMirror || _CodeMirror

  export default {
    name: 'in-coder',
    props: {
      // 外部传入的内容，用于实现双向绑定
      value: String,
      // 外部传入的语法类型
      language: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        title: '代码执行器',
        dlogVisible: false,
        logVisible: true,
        logs: [],
        text: '结果',
        // 内部真实的内容
        code: 'Please enter your world',
        // 默认的语法类型
        mode: 'javascript',
        // 编辑器实例
        coder: null,
        // 默认配置
        options: {
          // 缩进格式
          tabSize: 2,
          // 主题，对应主题库 JS 需要提前引入
          theme: 'cobalt',
          // 显示行号
          lineNumbers: true,
          line: true
        }
      }
    },
    mounted() {
      // 初始化
      this._initialize()
    },
    methods: {
      run(item) {
        this.logs = []
        // 需要在代码执行的时候，重新定义log
        this.reDefineConsoleLog();
        eval(this.code);
        console.log = this.orgLog;
      },
      clear() {
        this.logs = [];
      },
      close() {
        this.dlogVisible = !this.dlogVisible;
      },
      reDefineConsoleLog(args) {
        this.orgLog = console.log;
        const calls = [];
        console.log = (...args) => {
          let logs = [];
          for (let i = 0; i < args.length; i++) {
            let aLog = args[i];
            let logStr = JSON.stringify(aLog);
            if (!logStr) {
              if (typeof aLog === 'function') {
                // function can not 
                logStr = aLog.constructor;
              }
            }
            logs.push(logStr);
          }
          this.logs.push(logs.join(' , '));
          // 有打印日志时显示输出控制台
          this.logVisible = true;
          this.dlogVisible = true;
          // 可能导致死循环
          this.orgLog(...args);
        };
      },
      // 初始化
      _initialize() {
        // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
        this.coder = CodeMirror.fromTextArea(this.$refs.textarea, this.options)
        // 编辑器赋值
        this.coder.setValue(this.value || this.code)

        // 支持双向绑定
        this.coder.on('change', (coder) => {
          this.code = coder.getValue()

          if (this.$emit) {
            this.$emit('input', this.code)
          }
        })
        // 尝试从父容器获取语法类型
        if (this.language) {
          // 获取具体的语法类型对象
          let modeObj = this._getLanguage(this.language)
          // 判断父容器传入的语法是否被支持
          if (modeObj) {
            this.mode = modeObj.label
          }
        }
      }
    },
    components: {
      TitleComponent
    }
  }

</script>
<style lang="scss" scoped>
  .code-panel {
    width: 100%;
    border-radius: 4px;
    background-color: #2c3e50;

    .operation {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      background-color: #fff;
      padding: 8px 30px;
      background-color: #2c3e50;
      .item {
        cursor: pointer;
        margin: 10px 20px 10px 20px;
        background-size: 100% 100%;
      }
    }

    .console-warp {
      padding: 10px;
      background-color: #2c3e50;
      height: 200px;
      overflow: hidden scroll;
      .logs {
        text-align: left;
        padding: 4px 0px 4px px;
        font-size: 16px;
        color: white;
        border-bottom: .5px solid gray;
      }
            
    }

    /deep/ .CodeMirror {
      text-align: left !important;
    }
  }

</style>
