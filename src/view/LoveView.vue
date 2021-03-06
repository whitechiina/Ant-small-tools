<template>
  <div class="content">
    <div class="image">
      <img src="../../static/images/小Y.png" alt="">
    </div>
    <div class="text">
      <mark id="htmer_time" style="color: #fd7286;font-size: 20px;font-weight: 900;margin-left: -18px; text-stroke:0.4px #f00"></mark>
    </div>
    <div class="image">
      <img src="../../static/images/瑶瑶.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nowDate: "", // 当前日期
        timer: '',
      }
    },
    mounted() {
      this.timer = setInterval(this.setTime, 1000);
    },
    methods: {
      secondToDate(second) {
        if (!second) {
          return 0;
        }
        var time = new Array(0, 0, 0, 0, 0);
        if (second >= 365 * 24 * 3600) {
          time[0] = parseInt(second / (365 * 24 * 3600));
          second %= 365 * 24 * 3600;
        }
        if (second >= 24 * 3600) {
          time[1] = parseInt(second / (24 * 3600));
          second %= 24 * 3600;
        }
        if (second >= 3600) {
          time[2] = parseInt(second / 3600);
          second %= 3600;
        }
        if (second >= 60) {
          time[3] = parseInt(second / 60);
          second %= 60;
        }
        if (second > 0) {
          time[4] = second;
        }
        return time;
      },
      setTime() {
        //mouth要少一个月不然会出问题
        var create_time = Math.round(new Date(Date.UTC(2021, 1, 24, 0, 0, 0)).getTime() / 1000);
        var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
        var currentTime = this.secondToDate((timestamp - create_time));
        var currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天' +
          currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4] +
          '秒';
        if (document.getElementById("htmer_time") != null)
          document.getElementById("htmer_time").innerHTML = "我们认识了" + currentTimeHtml;
      },
      //关闭
      beforeDestroy() {
        clearInterval(this.timer);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F570efdc9a4039.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617618862&t=fe482337379f57865e75e245089b3886');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 120px 40px;
    .image {
      width: 220px;
      height: 220px;
      img {
        width: 220px;
        height: 220px;
        border-radius: 50%;
        border: 8px solid #fff;
      }
    }
  }
  #htmer_time {
    font-size: 26px !important;
    line-height: 200px;
  }

  mark {
    background-color: transparent;
    background-image: -webkit-linear-gradient(#ffe21d,#ffe21d);
    background-image: -o-linear-gradient(#ffe21d,#ffe21d);
    background-image: linear-gradient(#ffe21d,#ffe21d);
    background-position: 0 85%;
    background-size: 100% 20%;
    background-repeat: no-repeat;
  }
</style>
