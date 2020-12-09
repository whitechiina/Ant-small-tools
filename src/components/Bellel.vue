<template>
    <div class="global">
      <div class="global-item" @click="jump('1')">
        <img src="../../static/images/globalSmall.png" alt="">
        <div>
          <p>A级隐患</p>
          <p>{{dangerJson[1]}}</p>
        </div>
      </div>
      <div class="global-item" @click="jump('2')">
        <img src="../../static/images/globalSmall.png" alt="">
        <div>
          <p>B级隐患</p>
          <p>{{dangerJson[2]}}</p>
        </div>
      </div>
      <div class="global-item" @click="jump('3')">
        <img src="../../static/images/globalSmall.png" alt="">
        <div>
          <p>C级隐患</p>
          <p>{{dangerJson[3]}}</p>
        </div>
      </div>
      <div class="global-item" @click="jump('4')">
        <img src="../../static/images/globalSmall.png" alt="">
        <div>
          <p>D级隐患</p>
          <p>{{dangerJson[4]}}</p>
        </div>
      </div>
      <div class="global-item-conter">
        <img src="../../static/images/globalCenter.png" alt="">
        <div>
          <p>隐患统计</p>
          <p class="count">总数{{dangerCount}}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: '',
    props: ['seriesData', 'dangerCount'],
    data () {
      return {
        dangerJson: {}
      }
    },
    methods: {
      jump (level) {
        this.$emit('jump', level)
      },
      init () {
        // this.seriesData.map(e => {
        //   items[e.name] = e.count
        // })
        this.dangerJson = this.seriesData
      }
    },
    watch: {
      seriesData (val) {
        this.init()
      }
    }
  }
  </script>
  
  <style lang='scss'>
  .global {
    width: 100%;
    height: 300px;
    top: 50%;
    color: #c2d4ff;
  }
  .global-item-conter {
    width: 467px;
    height: 267px;
    position: absolute;
    display: flex;
    margin-top: -133px;
    top: 50%;
    margin-left: -273px;
    left: 50%;
    flex-direction: column;
    align-self: center;
    text-align: center;
    z-index: 999;
    div {
      position: absolute;
      text-align: center;
      top: 62%;
      left: 55%;
      // font-size: 16px;
      transform: translate(-50%, -50%);
      img {
        width: 140px;
        height: 80px;
        // transform: scale(3);
      }
      .count {
        line-height: 140px;
        // font-size: 18px;
      }
      & > div {
        position: absolute;
        width: 100%;
        top: -50%;
        left: 16%;
        // font-size: 18px;
        height: 20px;
        p {
          margin-bottom: 70px;
        }
      }
    }
  }
  .global-item {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 20px;
    justify-content: center;
    align-self: center;
    width: 120px;
    height: 60px;
    font-size: 14px;
    line-height: 60px;
    z-index: 2;
    img {
      width: 60px;
      height: 60px;
    }
    & > div {
      flex: 1;
      width: 1px;
      p {
        height: 15px;
      }
    }
    &:nth-child(1) {
      animation: animX 10s cubic-bezier(0.5, 0, 0.64, 1) -5s infinite alternate, animY 10s cubic-bezier(0.5, 0, 0.64, 1) 0s infinite alternate,
        scale 20s cubic-bezier(0.5, 0, 0.64, 1) 0s infinite alternate;
    }
  
    &:nth-child(2)  {
      animation: animX 10s cubic-bezier(0.5, 0, 0.64, 1) -10s infinite alternate, animY 10s cubic-bezier(0.5, 0, 0.64, 1) -5s infinite alternate,
        scale 20s cubic-bezier(0.5, 0, 0.64, 1) -5s infinite alternate;
    }
  
    &:nth-child(3)  {
      animation: animX 10s cubic-bezier(0.5, 0, 0.64, 1) -15s infinite alternate, animY 10s cubic-bezier(0.5, 0, 0.64, 1) -10s infinite alternate,
        scale 20s cubic-bezier(0.5, 0, 0.64, 1) -10s infinite alternate;
    }
  
    &:nth-child(4)  {
      animation: animX 10s cubic-bezier(0.5, 0, 0.64, 1) -20s infinite alternate, animY 10s cubic-bezier(0.5, 0, 0.64, 1) -15s infinite alternate,
        scale 20s cubic-bezier(0.5, 0, 0.64, 1) -15s infinite alternate;
    }
  
    &:nth-child(5)  {
      position: relative;
      text-align: center;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 140px;
        height: 80px;
        // transform: scale(3);
      }
      & > div {
        position: absolute;
        width: 100%;
        top: -50%;
        left: 16%;
        // font-size: 18px;
        height: 20px;
        p {
          margin-bottom: 70px;
        }
      }
      z-index: 1;
    }
    &:nth-child(n):hover {
      animation-play-state: paused;
    }
    @keyframes animX {
      0% {
        left: 10%;
      }
      100% {
        left: 70%;
      }
    }
    @keyframes animY {
      0% {
        top: 10%;
      }
      100% {
        top: 60%;
      }
    }
    @keyframes scale {
      0% {
        transform: scale(0.6);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(0.6);
      }
    }
  }
  p {
    margin: 0;
    padding: 0;
  }
  </style>
  