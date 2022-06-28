<template>
        <div>
            <select name="" id="genreSelect" v-model="genere" @change="onChangeSelect" class="rounded py-1 select_style">
                <option selected value="">Genere</option>
                <option :value="genere" v-for="(genere,id) in listaGeneri" :key="id">{{genere}}</option>
            </select>
        </div>
</template>

<script>
import {state} from '../store';

export default {
    name: 'SearchBar',

    data() {
        return {
            genere: '',
        }
    },

    computed: {
        listaGeneri() {
            return state.listaGeneri;
        }
    },

    methods: {
        onChangeSelect() {
            state.genereSelezionato = this.genere;
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.select_style {
    background-color: $bg-secondary;
    color: white;
}
</style>