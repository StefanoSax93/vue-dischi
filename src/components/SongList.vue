<template>
        <div class="bg_primary flex-grow-1 overflow-auto">
            <div class="container px-5 mt-5">
                
                    <!-- <div class="col">
                        <select name="" id="authorSelect" v-model="SelectedAuthor" class="rounded py-1 select_style w-100">
                            <option selected value="">Artista</option>
                            <option :value="author" v-for="(author,id) in AuthorList" :key="id">{{author}}</option>
                        </select>
                    </div> -->
                    
                
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-5">
                    <div class="col mb-4" v-for="song in filteredSongs" :key="song.author">
                        <SongCard :info="song"></SongCard>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import SongCard from './SongCard.vue';
import {state} from '../../store';

export default {
    name: 'SongList',
    components: {SongCard},

    data() {
        return {
            apiURL: "https://flynn.boolean.careers/exercises/api/array/music",
            SongsList: [],
        }
    },
    
    computed: {
        filteredSongs() {
            if(!state.genereSelezionato) {
                return this.SongsList;
            }

            return this.SongsList.filter((song) =>{
                return song.genre === state.genereSelezionato;
            })
        }
    },

    methods: {
        getSongs() {
            axios.get(this.apiURL)
                .then((resp) => {
                    this.SongsList = resp.data.response;
                    //creo la lista di generi
                    state.listaGeneri = this.listaGeneri();
                    console.log(state.listaGeneri);
                })
        },

        listaGeneri() {
            const GenresList = [];

            this.SongsList.forEach((song) => {
                    if (!GenresList.includes(song.genre)) {
                        GenresList.push(song.genre);
                    }
                });
            
            return GenresList;
        }
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