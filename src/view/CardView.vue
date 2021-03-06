<template>
  <div class="card">
    <a-row>
      <router-link to="/css">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example"
              src="https://iconfont.alicdn.com/t/5b5b581e-e16f-423e-8ccc-8a7785d4c9bc.png" />
            <a-card-meta title="奇幻CSS">
              <template slot="description">
                贝塞尔曲线
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <router-link to="/item">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example"
              src="https://iconfont.alicdn.com/t/0227b8df-3c59-4328-9b01-0256c9036c19.png" />
            <a-card-meta title="我的项目">
              <template slot="description">
                github真是个好东西
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <router-link to="/code">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example"
              src="https://iconfont.alicdn.com/t/fe41d8a2-da59-4387-84aa-d14e19d44f02.png" />
            <a-card-meta title="代码执行器">
              <template slot="description">
                在线执行代码
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <router-link to="/time">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example" src="https://info.makedream.site/img/server.68d2b337.png" />
            <a-card-meta title="倒计时~">
              <template slot="description">
                指定时间倒数
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <router-link to="/number">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example" src="https://info.makedream.site/img/countdown.5cbac6f4.png" />
            <a-card-meta title="数字转换">
              <template slot="description">
                数字转中文
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <router-link to="/music">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example"
              src="https://iconfont.alicdn.com/t/5a70ab86-bd92-4149-90c7-b605dca3134e.png" />
            <a-card-meta title="在线音乐">
              <template slot="description">
                本地音乐库
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <router-link to="/topo">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example"
              src="https://iconfont.alicdn.com/t/6ce996c3-ef9f-4b84-ab2e-7de02015ec4a.png" />
            <a-card-meta title="组态编辑">
              <template slot="description">
                待完成
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <router-link to="/lang">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example"
              src="https://iconfont.alicdn.com/t/17ad0320-1bca-4ddc-a8e6-4bde2477e158.png" />
            <a-card-meta title="狼人杀">
              <template slot="description">
                狼人杀发牌工具
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <router-link to="/Popover">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example"
              src="https://iconfont.alicdn.com/t/17ad0320-1bca-4ddc-a8e6-4bde2477e158.png" />
            <a-card-meta title="Popover组件">
              <template slot="description">
                el-Popover组件
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
      <!-- 我们认识了多久 -->
      <router-link to="/Love">
        <a-col :span="6" style="padding-left: 7.5px; padding-right: 7.5px; padding-bottom: 15px;">
          <a-card hoverable>
            <img slot="cover" alt="example"
              src="https://iconfont.alicdn.com/t/5eece56f-8c18-444a-9084-e007a77ed170.png" />
            <a-card-meta title="恋爱记忆">
              <template slot="description">
                我们认识了多久？
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </router-link>
    </a-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // UI库
        // https://www.iconfont.cn/illustrations/detail?spm=a313x.7781069.1998910419.d9df05512&cid=24348
      }
    },
  }

</script>
<style lang="scss" scoped>
  @import '@/assets/css/handle.scss';
  .card {
    /deep/ .ant-card-bordered {
      @include background_color("background_color1");
    }
    /deep/ .ant-card-meta {
      background: none;
      border-style: dashed;
      border-width: 1px 0 0;
      padding-top: 12px;
      @include font_color("font_color1")
    }

    /deep/ .ant-card-meta-title {
      text-align: left;
      font-size: 18px;
      font-weight: 800;
      @include font_color("font_color1")
    }

    /deep/ .ant-card-meta-description {
      font-size: 16px;
      text-align: left;
      @include font_color("font_color1")
    }
  }

  .ant-card-cover img {
    margin: 40px auto;
    width: 150px;
    height: 150px;
  }

</style>
