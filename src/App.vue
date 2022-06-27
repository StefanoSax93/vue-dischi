<template>
  <div class="d-flex flex-column h-100">
    <TheHeader/>
    <LoaderPage/>
    <SongList/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import SongList from './components/SongList.vue'
import LoaderPage from './components/LoaderPage.vue' 

export default {
  name: 'App',
  components: { TheHeader, SongList, LoaderPage },
}
</script>

<style lang="scss">
@import './assets/scss/general.scss';

</style>
