<template lang="pug">
  #app(md-theme="dark" class="md-theme-dark md-theme-default-dark")
    router-view
</template>

<script>
// import Navigation from '@/components/common/Navigation'
export default {

  name: 'app',
  components: {
  //  'app-head': Navigation
  }
}
</script>

<style src="./app.sass" lang="sass"></style>
