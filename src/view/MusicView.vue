<template>
  <div class="container">
    <div class="list">
      <!-- 下拉框 -->
      <a-dropdown :trigger="['click']" @command="handleCommand" icon="customer-service">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          歌曲列表
          <a-icon type="customer-service" theme="twoTone" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item v-for="(item,index) in musiclist" :key="index" :command="item" @click="handleCommand(item)">
            <span>{{index+1}}</span>
            <span>{{item.name}}</span>
            <span style="float:right; text-align: right;">{{item.artist}}</span>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <!-- 选择图片 -->
    <div class="pic">
      <div class="music-pic" :style="{backgroundImage: 'url('+ pic +')'}"></div>
    </div>
    <!-- 歌名歌手 -->
    <div class="music-contant">
      <div class="name">{{name}}</div>
      <div class="artist">{{artist}}</div>
    </div>
    <!-- 播放器 -->
    <audio id="music1" v-bind:src="musicUrl" controls="controls" loop="loop" ref="audio" class="myaudio"
      autoplay="false" hidden></audio>
    <!-- 音频波形 -->
    <!-- <canvas id="canvas" width="800" height="600"></canvas> -->
    <!-- 按钮control -->
    <div class="music-button">
      <div class="music-button-p">
        <a-button @click="stop" icon="caret-right" circle>{{state}}</a-button>
        <a-button @click="rbf" icon="rollback" circle>关闭</a-button>
      </div>
      <!-- 进度 -->
      <div class="music-play-info" style="width: 98%; padding: 10px 0px 10px 40px;">
        <a-progress :percent="percent" status="active"></a-progress>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "HelloWorld",
    data() {
      return {
        musiclist: [],
        rand: 1,
        pic: "",
        artist: "",
        name: "",
        lric: "",
        musicUrl: "",
        icon: "el-icon-video-play",
        percent: 0,
        state: '开始',
        timer: '',
        audioContent: {},
        source: null
      };
    },
    created() {
      const that = this;
      const url = "static/api.json";
      //读取数据
      axios.get(url).then(function (resp) {
        that.musiclist = resp.data;
        that.pic = resp.data[0].cover;
        that.artist = resp.data[0].artist;
        that.name = resp.data[0].name;
        that.lric = resp.data[0].url;
      });
      that.runTime();
    },
    destroyed() {
      clearInterval(this.timer)
    },
    methods: {
      // async init(url) {
      //   if (!window.AudioContext) {
      //     alert('您的浏览器不支持AudioContext');
      //   } else {
      //     // 创建上下文
      //     this.audioContent = new window.AudioContext()
      //     // var source = null
      //     // 使用Ajax获取音频文件
      //     var request = new XMLHttpRequest()
      //     request.open('GET', url, true)
      //     request.responseType = 'arraybuffer' // 配置数据的返回类型
      //     // 加载完成
      //     request.onload = () => {
      //       var arraybuffer = request.response
      //       console.log(this.audioContent)
      //       this.audioContent.decodeAudioData(arraybuffer).then(function(buffer){
      //         // 创建分析器
      //         var analyser = this.audioContent.createAnalyser()
      //         this.source = this.audioContent.createBufferSource()
      //         // 将source与分析器链接

      //         this.source.connect(analyser)
      //         // 将分析器与destination链接，这样才能形成到达扬声器的通路
      //         // analyser.connect(this.audioContent.destination)
      //         // 将解码后的buffer数据复制给source
      //         this.source.buffer = buffer
      //         // 播放
      //         this.source.start(0)
      //         this.source.addEventListener('ended', (e) => {
      //           this.getInit()
      //           // media.pause();
      //         }, false);
      //         // 开始绘制频谱图
      //         function drawSpectrum() {
      //           var canvas = document.getElementById('canvas')
      //           var cwidth = canvas.width
      //           var cheight = canvas.height - 2
      //           var meterWidth = 1 // 能量条的宽度
      //           const gap = 1 // 能量条的间距
      //           let meterNum = 1100 / (2.8) // 计算当前画布上能画多少条
      //           let ctx = canvas.getContext('2d')

      //           var capHeight = 2 //
      //           var array = new Uint8Array(analyser.frequencyBinCount)
      //           analyser.getByteFrequencyData(array)
      //           var step = Math.floor(array.length / meterNum) // 计算从analyser中的采样步长

      //           // 清理画布
      //           ctx.clearRect(0, 0, cwidth, cheight)
      //           var draw = new Coordinates.draw(canvas, 20)
      //           var color1 = ctx.createLinearGradient(cwidth, cheight - 50, cwidth, cheight - 200);
      //           color1.addColorStop(0, '#FFB100');
      //           color1.addColorStop(.5, '#FF6B29');
      //           color1.addColorStop(1, '#FF692A');
      //           for (var i = 0; i < meterNum; i++) {
      //             var audioHeight = array[step * i];
      //             ctx.fillStyle = color1; // 绘制向上的线条
      //             ctx.fillRect(i * 2.8 + 31, cheight - 19, 3, -audioHeight);
      //             ctx.fillRect(i * 2.8 + 31, cheight - 19, 3, -audioHeight);
      //            }
      //           window.requestAnimationFrame(drawSpectrum)
      //         }
      //         window.requestAnimationFrame(drawSpectrum)
      //       }, function (e) {
      //         console.info('处理出错')
      //       })
      //     }
      //     request.send()
      //   }
      // },
      async handleCommand(command) {
        this.pic = command.cover;
        this.name = command.name;
        this.artist = command.artist;
        this.lric = command.url;
        this.musicUrl = command.url;
        this.rand = (Math.round(Math.random() * 200) % this.musiclist.length) + 1;
        this.state = '暂停';
        // this.init(command.url)
      },
      rbf() {
        var audio = document.getElementById("music1");
        audio.currentTime = 0;
      },
      stop() {
        var audio = document.getElementById("music1");
        audio.volume = 0.8;
        if (audio !== null) {
          //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
          if (audio.paused) {
            audio.play(); // 这个就是播放
            this.state = '暂停'
          } else {
            audio.pause(); // 这个就是暂停
            this.state = '播放'
          }
        }
      },
      runTime() {
        //运行倒计时
        var that = this;
        this.timer = setInterval(function () {
          var audio = document.getElementById("music1");
          that.percent = Math.round(
            (parseInt(audio.currentTime) / parseInt(audio.duration)) * 100
          );
        }, 100);
      }
    }
  };

</script>

<style lang="scss" scoped>
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .container {
    width: 100%;
    height: 100%;

    .list {
      margin: 36px 0px;
      z-index: 1;
      text-align: center;

      /deep/ .ant-dropdown-link {
        padding: 6px;
        border: 1px solid #40a9ff;
        border-radius: 5px;
      }
      :hover {
        background-color: #40a9ff;
        color: #fff;
      }
    }

    .pic {
      display: flex;
      justify-content: center;

      .music-pic {
        background: rgb(252, 209, 209);
        height: 300px;
        width: 300px;
        z-index: 1;
        border-radius: 150px;
        animation: rotate 15s linear infinite;
      }
    }

    .music-contant {
      .name {
        text-align: center;
        padding: 40px 0px;
      }

      .artist {
        text-align: center;
        padding: 10px 0px;
      }
    }
  }

  .music-bgimg {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
    filter: blur(30px);
    display: block;
  }

  .flexmain {
    display: flex;
    justify-content: center;
  }

  .name {
    padding: 10px;
    height: 20px;
    line-height: 20px;
    font-size: 30px;
    text-align: left;
    font-weight: bold;
  }

  .artist {
    position: relative;
    padding: 10px;
  }

  .lric {
    position: relative;
    padding: 10px;
    text-align: center;
  }

  .music-button {
    background: rgba(212, 212, 212, .8);
    bottom: 0;
    width: 50%;
    z-index: 1;
    border-radius: 20px;
    margin-left: 25%;
    margin-top: 30px;
  }

  .music-button .music-button-p,
  .music-button .music-play-info {
    /deep/ .ant-progress-text {
      text-align: center;
    }
  }

  .music-button-p {
    padding: 14px 0px 0px 10px;
  }

  .myaudio {
    width: 100%;
    height: 40px;
    outline: none;
    background-color: #f1f3f4;
  }

</style>
