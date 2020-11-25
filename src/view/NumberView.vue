<template>
  <div class="ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-lg-14 ant-col-lg-offset-5">
    <div class="input">
      <title-component :title="title" />
      <a-input prefix="￥" suffix="RMB" v-model="value" @pressEnter="pressEnter(value)" />
    </div>
    <div class="text">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
  import TitleComponent from '../components/Title.vue'
  export default {
    data() {
      return {
        title: '数字转文字',
        value: '',
        text: ''
      }
    },
    methods: {
      // 回车事件
      pressEnter(e) {
        if (!isNaN(e)) {
          this.smallToBig(e)
        } else {
          this.$notification['warning']({
            message: '请输入阿拉伯数字',
            description: '不然真的转换不了',
          });
        }
      },
      smallToBig(money) {
        //  将数字金额转换为大写金额
        var cnNums = new Array(
          "零",
          "壹",
          "贰",
          "叁",
          "肆",
          "伍",
          "陆",
          "柒",
          "捌",
          "玖"
        ); //汉字的数字
        var cnIntRadice = new Array("", "拾", "佰", "仟"); //基本单位
        var cnIntUnits = new Array("", "万", "亿", "兆"); //对应整数部分扩展单位
        var cnDecUnits = new Array("角", "分", "毫", "厘"); //对应小数部分单位
        var cnInteger = "整"; //整数金额时后面跟的字符
        var cnIntLast = "元"; //整数完以后的单位
        //最大处理的数字
        var maxNum = 999999999999999.9999;
        var integerNum; //金额整数部分
        var decimalNum; //金额小数部分
        //输出的中文金额字符串
        var chineseStr = "";
        var parts; //分离金额后用的数组，预定义
        if (money == "") {
          return "";
        }

        money = parseFloat(money);
        if (money >= maxNum) {
          //超出最大处理数字
          return "超出最大处理数字";
        }
        if (money == 0) {
          chineseStr = cnNums[0] + cnIntLast + cnInteger;
          return chineseStr;
        }

        //四舍五入保留两位小数,转换为字符串
        money = Math.round(money * 100).toString();
        integerNum = money.substr(0, money.length - 2);
        decimalNum = money.substr(money.length - 2);

        //获取整型部分转换
        if (parseInt(integerNum, 10) > 0) {
          var zeroCount = 0;
          var IntLen = integerNum.length;
          for (var i = 0; i < IntLen; i++) {
            var n = integerNum.substr(i, 1);
            var p = IntLen - i - 1;
            var q = p / 4;
            var m = p % 4;
            if (n == "0") {
              zeroCount++;
            } else {
              if (zeroCount > 0) {
                chineseStr += cnNums[0];
              }
              //归零
              zeroCount = 0;
              chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
              chineseStr += cnIntUnits[q];
            }
          }
          chineseStr += cnIntLast;
        }
        //小数部分
        if (decimalNum != "") {
          var decLen = decimalNum.length;
          for (var i = 0; i < decLen; i++) {
            var n = decimalNum.substr(i, 1);
            if (n != "0") {
              chineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
          }
        }
        if (chineseStr == "") {
          chineseStr += cnNums[0] + cnIntLast + cnInteger;
        } else if (decimalNum == "" || /^0*$/.test(decimalNum)) {
          chineseStr += cnInteger;
        }
        this.text = chineseStr
      }
    },
    watch: {
      value(e) {
        if (!isNaN(e)) {
          if (e.length < 15) {
            this.smallToBig(e)
          } else {
            this.$notification['warning']({
              message: '请你的脑汁清醒点',
              description: '你真没这么多的钱',
            });
          }
        } else {
          this.$notification['warning']({
            message: '请输入阿拉伯数字',
            description: '不然真的转换不了',
          });
          return
        }
      }
    },
    components: {
      TitleComponent
    }

  };

</script>
<style lang="scss" scoped>
  .input {
    font-size: 24px;
    font-weight: 800;

    /deep/ .ant-input {
      height: 50px;
      font-size: 18px;
    }
  }

  .text {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 800;
  }

</style>
