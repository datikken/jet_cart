<template>
    <Fragment>
        <Breadcrumbs />
        <ProductDetails />

    </Fragment>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout';
    import Breadcrumbs from '@/Shared/Breadcrumbs/Breadcrumbs'
    import ProductDetails from '@/Shared/Product/ProductDetails'
    import {Fragment} from 'vue-fragment'

    export default {
        name: "CatalogDetails",
        layout: MainLayout,
        components: {
            Breadcrumbs,
            Fragment,
            ProductDetails
        },
        created() {
            console.log(this.$page.product)
        }
    }
</script>
