<template>
  <div id="app">
    <header-view />
    <div class="main">
      <router-view />
    </div>
    <footer-view />
  </div>
</template>

<script>
  import HeaderView from './components/Header'
  import FooterView from './components/Footer'
  export default {
    name: 'App',
    components: {
      HeaderView,
      FooterView
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/handle.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #app .main {
    margin: 40px 200px;
    min-height: 70vh;
  }

</style>
