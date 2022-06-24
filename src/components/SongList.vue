<template>
        <div class="bg_primary flex-grow-1">
            <SongCard/>
        </div>
</template>

<script>
import axios from 'axios';
import SongCard from './SongCard.vue';

export default {
    name: 'SongList',
    components: {SongCard},

    data() {
        return {
            apiURL: "https://flynn.boolean.careers/exercises/api/array/music",
            songList: [],
        }
    },

    methods: {
        getSongs() {
            axios.get(this.apiURL)
                .then((resp) => {
                    this.songList = resp.response;
                })
        },
    },

    created() {
        this.getSongs();
    },
    
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.bg_primary {
    background-color: $bg-primary;
}
</style>