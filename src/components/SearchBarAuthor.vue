<template>
    <div>
        <select name="" id="authorSelect" v-model="autore" @change="onChangeAuthor" class="rounded py-1 select_style">
            <option selected value="">Autore</option>
            <option :value="autore" v-for="(autore,id) in listaAutori" :key="id">{{autore}}</option>
        </select>
    </div>
</template>

<script>
import {state} from '../store';

export default {
    name: 'SearchBarAuthor',

    data() {
        return {
            autore: '',
        }
    },

    computed: {
        listaAutori() {
            return state.listaAutori;
        }
    },

    methods: {
        onChangeAuthor() {
            state.autoreSelezionato = this.autore;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.select_style {
    background-color: $bg-secondary;
    color: white;
}
</style>