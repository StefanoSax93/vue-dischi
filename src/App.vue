<template>
  <div id="app">
    <TheHeader/>
    <SongList/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import SongList from './components/SongList.vue' 

export default {
  name: 'App',
  components: {TheHeader,SongList},
}
</script>

<style lang="scss">
@import './assets/scss/general.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
