<template>
    <Fragment>
        <Breadcrumbs />
        <BlogPostsList />

    </Fragment>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'
    import BlogPostsList from '@/Shared/Blog/BlogPostsList'
    import Breadcrumbs from '@/Shared/Breadcrumbs/Breadcrumbs'
    import {Fragment} from 'vue-fragment'

    export default {
        name: "Blog",
        layout: MainLayout,
        components: {
            BlogPostsList,
            Fragment,
            Breadcrumbs
        },
        mounted() {
            console.warn('st3')
        }
    }
</script>
