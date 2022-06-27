<template>
        <div class="bg_secondary px-4 py-3 flex-grow-0">
            <div class="d-flex justify-content-between">
                <img src="../assets/img/logo-small.svg" alt="" class="logo">
                <SearchBar/>
            </div>
        </div>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
    name: "TheHeader",
    components: { SearchBar }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.bg_secondary {
    background-color: $bg-secondary;

    .logo {
        max-width: 50px;
        aspect-ratio: 1/1;
    }
}

</style>