<template>

</template>

<script>
    import MainLayout from '@/Layouts/MainLayout';

    export default {
        name: "CatalogDetails",
        layout: MainLayout,
        components: {},
        created() {
            console.log(this.$page.product)
        }
    }
</script>
