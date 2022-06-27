<template>
        <div class="loader bg_primary text-white text-center pt-4" :class="{hidden : show == false}">
            <div class="spinner-border"></div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    },

    created() {
        setTimeout(() => {
            this.show = false;
        }, 200);
    },
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';


.hidden {
    transition: 0.3s ease-in-out;
    display: none;
}
</style>