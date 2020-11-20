<template>
  <div>
    <title-component :title="title" />
  </div>
</template>

<script>
  import TitleComponent from '../components/Title.vue'
  export default {
    data() {
      return {
        title: '组态编辑',
      }
    },
    components: {
      TitleComponent
    }
  }

</script>

<style lang="scss" scoped>

</style>
