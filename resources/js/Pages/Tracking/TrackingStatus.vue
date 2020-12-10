<template>
    <TrackingResults/>
</template>

<script>
    import TrackingResults from '@/Shared/Tracking/TrackingResults'
    import MainLayout from '@/Layouts/MainLayout';

    export default {
        name: "TrackingStatus",
        components: {
            TrackingResults
        },
        layout: MainLayout
    }
</script>
