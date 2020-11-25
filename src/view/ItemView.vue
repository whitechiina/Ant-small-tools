<template>
  <div>
    <title-component :title="title" />
    <div class="container">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="item-pic">
          <svg t="1606205101626" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1195">
            <path
              d="M777.8 128.6H624l-112 177.2-96-177.2H64L512 896 960 128.6h-182.2z m-602.4 64h107.6L512 589 740.8 192.6h107.6L512 769 175.4 192.6z"
              p-id="1196" data-spm-anchor-id="a313x.7781069.0.i0"></path>
          </svg>
        </div>
        <h3 class="item-title">{{item.name}}</h3>
        <p class="item-desc">{{item.description}}</p>
        <div class="item-btn">
          <a class="github" :href="item.html_url">GitHub</a>
          <a class="view" :href="item.html_url">View</a>
          <a class="clone" href="javascript:void(0)" @click="copy(item.clone_url)">Clone</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TitleComponent from '../components/Title.vue'
  import {
    myCase
  } from '@/api/page'
  export default {
    data() {
      return {
        title: '我的项目',
        data: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        myCase({page: 1}).then(res => {
          this.data = res;
        })
      },
      async copy(url) {
        var input = document.createElement('input')
        input.value = url
        document.body.appendChild(input)
        input.select(); // 选中输入框中的内容
        document.execCommand("Copy"); // 执行复制操作
        document.body.removeChild(input);
        this.$notification['success']({
          message: '复制成功',
          description: 'git clone + ctrl + V',
        });
      }
    },
    components: {
      TitleComponent
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    overflow: hidden;

    .item {
      width: 190px;
      height: 280px;
      background: rgba(0, 0, 0, .04);
      border: 1px solid #f1f1f1;
      box-sizing: border-box;
      padding: 10px;
      cursor: pointer;
      float: left;
      margin-right: 18px;
      margin-bottom: 16px;

      &:hover {
        background-color: #fff;
      }

      &:hover>.item-pic {
        transform: rotate(180deg);
        transition-duration: .5s;
      }

      .item-pic {
        height: 120px;
        display: flex;
        justify-content: center;

        svg {
          height: 120px;
        }
      }

      .item-title {
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        transition: .3s;
        overflow: hidden;
      }

      .item-desc {
        height: 50px;
        margin-top: 10px;
        line-height: 26px;
        margin-bottom: 10px;
        overflow: hidden;
      }

      .item-btn {
        border-top: 1px solid rgb(211, 209, 209);
        display: flex;
        height: 40px;

        a {
          color: #2c3e50;
        }

        .github {
          width: 50%;
          position: relative;
          text-align: center;
          line-height: 40px;
          box-sizing: border-box;
          border-right: 1px solid rgb(211, 209, 209);
          &:hover {
            color: #8ed53c;
            text-decoration: underline;
          }
        }

        .view {
          width: 50%;
          position: relative;
          text-align: center;
          line-height: 40px;
          box-sizing: border-box;
          border-right: 1px solid rgb(211, 209, 209);
          &:hover {
            color: #8ed53c;
            text-decoration: underline;
          }
        }

        .clone {
          width: 50%;
          position: relative;
          text-align: center;
          line-height: 40px;
          box-sizing: border-box;
          &:hover {
            color: #8ed53c;
            text-decoration: underline;
          }
        }

      }
    }
  }

</style>
