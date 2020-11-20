<template>
  <div class="header">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail" style="line-height: 60px;">
        <router-link to="/">
          <a-icon type="mail" /> 首页 </router-link>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting" /> 小工具 </span>
        <a-menu-item v-for="(item, index) in navData" :key="index" @click="routeTo(item.path)">
          {{item.name}}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item>
        <a-button @click="color({index})">换色</a-button>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        index: true,
        current: ['mail'],
        navData: [{
            name: '服务器监控',
            path: '/serve',
          },
          {
            name: '倒计时',
            path: '/time'
          },
          {
            name: '数字转换',
            path: '/number'
          },
          {
            name: '在线音乐',
            path: '/music'
          },
          {
            name: '代码执行器',
            path: '/code'
          },
          {
            name: 'topo编辑',
            path: '/topo'
          }
        ]
      };
    },
    methods: {
      routeTo(href) {
        this.$router.push(href);
      },
      color(index) {
        console.log(window.document.documentElement)
        //修改html的主题
        window.document.documentElement.setAttribute(
          "data-theme",
          index.index ? "dark" : "light"
        );
        this.index = !index.index;
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import '@/assets/css/handle.scss';
  .header {
    box-shadow: 0 2px 8px #f0f1f2;
  }


  .ant-menu-horizontal {
    padding: 0px 200px;
    border-bottom: none;
    @include background_color("background_color1");
    @include font_color("font_color1")
  }

  .ant-menu-horizontal > .ant-menu-item > a {
    @include font_color("font_color1");
  }
  .ant-menu-item {
    line-height: 60px;
  }

  .ant-menu-horizontal>.ant-menu-item {
    float: left !important;
  }

  .ant-menu-horizontal>.ant-menu-submenu {
    float: left;
    line-height: 60px;
  }
  .ppt {
    @include border_color("border_color1");
  }
</style>
