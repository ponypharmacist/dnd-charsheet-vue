<template lang="pug" src="./Navigation.pug"></template>

<script>
export default {}
</script>

<style lang="sass" scoped>
ul
    list-style-type: none
    text-align: center
    margin: 0

li
    display: inline-block
    margin: 0 10px

a
    color: #fff
    text-decoration: none
    padding: 12px
    border-radius: 5px

nav
    background: black
    padding: 30px 0
    margin-bottom: 40px

.router-link-active
    background: rgba(255,255,255,0.8)
    color: #444
</style>
