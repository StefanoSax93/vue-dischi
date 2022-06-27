<template>
        <div class="bg_primary flex-grow-1 overflow-auto">
            <div class="container px-5 mt-5">     
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
            if(!state.genereSelezionato && !state.autoreSelezionato) {
                return this.SongsList;
            }

            return this.SongsList.filter((song) =>{
                return song.genre === state.genereSelezionato || song.author === state.autoreSelezionato;
            })
        }
    },

    methods: {
        getSongs() {
            state.loading = true;
            axios.get(this.apiURL)
                .then((resp) => {
                    this.SongsList = resp.data.response;
                    //creo la lista di generi
                    state.listaGeneri = this.listaGeneri();
                    console.log(state.listaGeneri);

                    //creo la lista degli autori
                    state.listaAutori = this.listaAutori();
                    console.log(state.listaAutori);

                    state.loading=false;
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
        },

        listaAutori() {
            const AuthorList = [];

            this.SongsList.forEach((song) => {
                    if (!AuthorList.includes(song.author)) {
                        AuthorList.push(song.author);
                    }
                });
            
            return AuthorList;
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