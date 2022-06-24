<template>
        <div class="text-center">
            <img :src="info.poster" :alt="info.author">
            <div>{{info.title}}</div>
            <div>{{info.author}}</div>
            <div>{{info.year}}</div>
        </div>
</template>

<script>

export default {
    name: 'SongCard',
    props: {
        info: Object,
    },
};
</script>

<style lang="scss">

</style>