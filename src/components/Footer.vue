<template>
  <div class="footer">
    <a-row>
      <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        <div class="item">
          <div class="title">
            <p>技术支持</p>
          </div>
          <p><img src="../assets/images/antd.svg" style="width: 20px; height: 20px; margin-right: 10px;">Ant Design组件库
          </p>
          <p><img src="../assets/images/vue.png" style="width: 20px; height: 20px; margin-right: 10px;">Vue框架</p>
        </div>
      </a-col>
      <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        <div class="item">
          <div class="title">
            <p>技术支持</p>
          </div>
          <p><img src="../assets/images/antd.svg" style="width: 20px; height: 20px; margin-right: 10px;">Ant Design组件库
          </p>
          <p><img src="../assets/images/vue.png" style="width: 20px; height: 20px; margin-right: 10px;">Vue框架</p>
        </div>
      </a-col>
      <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        <div class="item">
          <div class="title">
            <p>技术支持</p>
          </div>
          <p><img src="../assets/images/antd.svg" style="width: 20px; height: 20px; margin-right: 10px;">Ant Design组件库
          </p>
          <p><img src="../assets/images/vue.png" style="width: 20px; height: 20px; margin-right: 10px;">Vue框架</p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
  }

</script>
<style lang="scss" scoped>
  @import '@/assets/css/handle.scss';
  .footer {
    background-color: #0f344a;
    @include background_color("background_color1");
    padding: 40px 200px;
    color: #fff;
    font-size: 16px;

    .title {
      p {
        font-size: 18px;
        font-weight: 900;
        text-align: left;
      }
    }

    p {
      text-align: left;
    }
  }

</style>
