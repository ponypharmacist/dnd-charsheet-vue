<template>
  <div id="app">
    <app-head></app-head>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {

  name: 'app',
  components: {
    'app-head': Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  /*margin-top: 60px;*/
}
</style>
