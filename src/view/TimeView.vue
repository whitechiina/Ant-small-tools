<template>
  <div class="ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-lg-14 ant-col-lg-offset-5">
    <title-component :title="title"/>
    <div class="ant-card ant-card-bordered">
      <p class="distance">距离过年</p>
      <p class="time">{{date_d}}天{{date_h}}时{{date_m}}分{{date_s}}:{{date_ms}}秒</p>
    </div>
  </div>
</template>
<script>
  import moment from 'moment';
  import TitleComponent from '../components/Title.vue'
  export default {
    data() {
      return {
        title: '计时器',
        date_d: '',
        date_h: '',
        date_m: '',
        date_s: '',
        date_ms: '',
      }
    },
    created() {
      this.countTime()
    },
    methods: {
      //时间倒计时处理
      countTime() {
        var date = new Date()
        var now = date.getTime()
        var end = '1613059200000'
        
        var leftTime = end - now //时间差
        var d, h, m, s, ms
        if (leftTime >= 0) {
          d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
          h = Math.floor(((leftTime / 1000 / 60 / 60) % 24))
          m = Math.floor((leftTime / 1000 / 60) % 60)
          s = Math.floor((leftTime / 1000) % 60)
          ms = Math.floor(leftTime % 1000)
          if (ms < 100) {
            ms = '0' + ms
          }
          if (s < 10) {
            s = '0' + s
          }
          if (m < 10) {
            m = '0' + m
          }
          // if(h < 10) {
          h = h
          // }
        } else {
          console.log('已截止')
        }
        this.date_d = d //这里是渲染的天数
        this.date_h = h //这里是渲染的小时
        this.date_m = m //这里是渲染的分钟
        this.date_s = s //这里是渲染的秒数
        this.date_ms = ms //这里是渲染的毫秒
        //递归每秒调用countTime方法，显示动态时间效果
        setTimeout(this.countTime, 50)
      },
    },
    components: {
      TitleComponent
    }
  }

</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: 800;
  }

  .ant-card-bordered {
    padding: 20px;
    border: 1px solid #e8e8e8;
    .distance {
      text-align: left;
      font-size: 18px;
    }
    .time {
      text-align: left;
      font-size: 28px;
      color: #000;
      font-weight: 500;
      margin-bottom: 0px;
      letter-spacing:4px
    }
  }

</style>
