<template>
    <DashboardIndex />
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout';
    import DashboardIndex from '@/Shared/Dashboard/DashboardIndex'

    export default {
        layout: MainLayout,
        components: {
            DashboardIndex
        },
        mounted() {
            console.log(this.$page);
        }
    }
</script>
