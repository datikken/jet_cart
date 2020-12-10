<template>
    <img
        onerror="this.src = '/images/unnecessary/owl-swiper.svg';"
        :class="className"
        :src="path"
        :alt="alt_text">
</template>

<script>
    export default {
        name: "ImageComp",
        props: ['path', 'alt_text', 'className']
    }
</script>
