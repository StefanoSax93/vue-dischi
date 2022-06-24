<template>
        <div class="text-center text-white bg_secondary p-4 h-100">
            <img :src="info.poster" :alt="`immagine di ${info.author}`" class="song-img">
            <h4 class="text-uppercase my-3">{{info.title}}</h4>
            <div class="text-secondary">{{info.author}}</div>
            <div class="text-secondary">{{info.year}}</div>
        </div>
</template>

<script>

export default {
    name: 'SongCard',
    props: {
        info: Object,
    },
};
</script>

<style lang="scss">

.song-img {
    max-width: 100%;
    aspect-ratio: 1/1; 
}
</style>