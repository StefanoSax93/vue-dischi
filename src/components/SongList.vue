<template>
        <div class="bg_primary flex-grow-1">
            <div class="container px-5 mt-5">
                <div class="d-flex justify-content-between mb-5">
                    <div>
                        <select name="" id="authorSelect" v-model="SelectedAuthor" class="rounded py-1 select_style">
                            <option selected value="">Artista</option>
                            <option :value="author" v-for="(author,id) in AuthorList" :key="id">{{author}}</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="genreSelect" v-model="SelectedGenre" class="rounded py-1 select_style">
                            <option selected value="">Genere</option>
                            <option :value="genre" v-for="(genre,id) in GenresList" :key="id">{{genre}}</option>
                        </select>
                    </div>
                </div>
                <div class="row row-cols-5 gx-5">
                    <div class="col mb-4" v-for="song in filterAlbums" :key="song.author">
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
            GenresList: [],
            AuthorList: [],
            SelectedGenre: '',
            SelectedAuthor: '',
        }
    },
    
    computed: {
        filterAlbums() {
            const filteredAlbums = [];

            this.SongsList.forEach(song => {
                if (song.genre.includes(this.SelectedGenre) && song.author.includes(this.SelectedAuthor)) {
                    filteredAlbums.push(song);
                }
            });
            return filteredAlbums;
        }
    },

    methods: {
        getSongs() {
            axios.get(this.apiURL)
                .then((resp) => {
                    this.SongsList = resp.data.response;
                    //creo la lista di generi
                    this.SongsList.forEach(song => {
                        if (!this.GenresList.includes(song.genre)) {
                            this.GenresList.push(song.genre);
                        }
                    });
                    this.SongsList.forEach(song => {
                        if (!this.AuthorList.includes(song.author)) {
                            this.AuthorList.push(song.author);
                        }
                    });
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
.select_style {
    width: 200px;
    background-color: $bg-secondary;
    color: white;
}
</style>