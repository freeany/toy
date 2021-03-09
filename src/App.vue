<template>
  <div id="app">
    <!-- <svg>
      <use xlink:href="#icon-wx"></use>
    </svg> -->
    <svg-icon icon-class="wx"></svg-icon>
    <svg-icon icon-class="q"></svg-icon>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import './assets/icons/wx.svg'
import HelloWorld from 'comps/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
