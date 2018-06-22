<template lang="pug">
  #app(md-theme="default-dark")
    app-head
    router-view
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
