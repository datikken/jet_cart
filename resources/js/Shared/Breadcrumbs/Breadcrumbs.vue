<template>
    <div class="breadcrumb">
        <div class="breadcrumb_wrap">
            <inertia-link :href="route(link.link)" class="breadcrumb_item" v-for="link in links" :key="link.name">
                <span class="breadcrumb_item_inner">{{ link.name }}</span>
                <span class="breadcrumb_arrow"></span>
            </inertia-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Breadcrumbs",
        data() {
            return {
                links: [
                    {
                        link: 'index',
                        name: 'Главная'
                    },
                    {
                        link: 'catalog',
                        name: 'Каталог'
                    }
                ]
            }
        },
    }
</script>

<style>

</style>
