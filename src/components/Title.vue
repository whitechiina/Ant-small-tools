<template>
  <div class="tite">
    <p class="home-title-p" style="font-size: 24px; font-weight: 800;">{{title}}</p>
    <div class="ant-divider ant-divider-horizontal ant-divider-dashed"></div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {}
  }

</script>
<style lang="scss" scoped>
  @import '@/assets/css/handle.scss';
  .home-title-p {
    @include font_color("background_color1");
  }
</style>
