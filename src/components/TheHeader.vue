<template>
        <div class="bg_secondary px-4 py-3 flex-grow-0">
            <img src="../assets/img/logo-small.svg" alt="" class="logo">
        </div>
</template>

<script>

export default {
    name: 'TheHeader',
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