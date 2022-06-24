<template>
  <div class="d-flex flex-column h-100">
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

</style>
