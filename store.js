import Vue from "vue";

export const state = Vue.observable({ 
    listaGeneri: [],
    genereSelezionato: "",

    listaAutori: [],
    autoreSelezionato: "",

    loading: false,
});