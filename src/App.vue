<template>
  <div id="app">
    <app-head></app-head>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {

  name: 'app',
  components: {
    'app-head': Navigation
  }
}
</script>

<style src="./app.sass" lang="sass"></style>
