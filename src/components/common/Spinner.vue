<template lang="pug">
  img.spinner(src="../../assets/loading.svg")
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style lang="sass" scoped>
.spinner
  width: 128px
  height: 128px
  position: relative
  top: 50%
  left: 50%
  margin-left: -64px
</style>
