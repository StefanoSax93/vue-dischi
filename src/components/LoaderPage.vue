<template>
        <div v-if="loading" class="loader bg_primary text-white text-center pt-4">
            <div class="spinner-border"></div>
        </div>
</template>

<script>
import {state} from '../store';

export default {
    
    computed: {
        loading() {
            return state.loading;
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';


.hidden {
    transition: 0.3s ease-in-out;
    display: none;
}
</style>