<template>
    <Fragment>
        <div class="postList">
            <BlogPostsListItem v-for="post in posts" :post="post"/>
        </div>
    </Fragment>
    <!--@include('components.modals.shouldBeLoggedIn')-->
</template>

<script>
    import BlogPostsListItem from '@/Shared/Blog/BlogPostsListItem'
    import {Fragment} from 'vue-fragment'

    export default {
        name: "BlogPostsList",
        data: () => ({
            posts: []
        }),
        components: {
            BlogPostsListItem,
            Fragment
        },
        created() {
            this.posts = this.$page.posts;

            console.warn('blog posts list', this.$page)
        }
    }
</script>

<style scoped>

</style>
