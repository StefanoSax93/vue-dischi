<template>
        <div class="bg_primary flex-grow-1">
            <div class="container px-5 mt-5">
                <div class="row row-cols-5 gx-5">
                    <div class="col mb-4" v-for="song in SongsList" :key="song.author">
                        <SongCard :info="song"></SongCard>
                    </div>
                </div>
            </div>
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
            SongsList: [],
        }
    },

    methods: {
        getSongs() {
            axios.get(this.apiURL)
                .then((resp) => {
                    this.SongsList = resp.data.response;
                })
        },
    },

    mounted() {
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