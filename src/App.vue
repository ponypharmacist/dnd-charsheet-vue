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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  background: #000 url('assets/bg-simple-1440.56.jpg') repeat-y center top / cover;
  background-attachment: fixed;
}
.golden-border {
  background-color: rgba(0,0,0,.3);
  position: relative;
  border: none;
  color: #ecbe57;
  padding: 24px;
}
.golden-border::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-width: 24px;
  border-style: solid;
  border-image-source: url('assets/frame.png');
  border-image-slice: 24;
  border-image-outset: 0;
  border-image-repeat: round;
  pointer-events: none;
}
.table-striped > tbody > tr:nth-of-type(2n+1) {
  background-color: rgba(0,0,0,.3);
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  border-top: none;
}
.table > thead > tr > th {
  border-bottom: none;
}

.mb-1 {
  margin-bottom: 1rem;
}
</style>
