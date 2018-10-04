<template lang="pug">
  .disclaimer 
    | Made by 
    a.roll-link(href="http://glinskiy.net" target="_blank") Dmitry Glinskiy
    | , feel free to use, modify and distribute: 
    a.roll-link(href="https://github.com/ponypharmacist/dnd-charsheet-vue" target="_blank") GitHub repo
</template>

<script>
export default {
  name: 'Disclaimer'
}
</script>

<style lang="sass" scoped>
.disclaimer
  text-align: center
  padding: 14px
</style>
