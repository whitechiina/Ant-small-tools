<template>
  <div>
    <title-component :title="title" />
  </div>
</template>

<script>
  import store from '../store/index.js'
  import TitleComponent from '../components/Title.vue'
  export default {
    data() {
      return {
        title: '组态编辑',
      }
    },
    created () {
      this.num = store.state.count;
    },
    components: {
      TitleComponent
    }
  }

</script>

<style lang="scss" scoped>

</style>
