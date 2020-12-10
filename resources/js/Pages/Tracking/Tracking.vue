<template>
    <fragment>
        <TrackingRequest />
    </fragment>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'
    import TrackingRequest from '@/Shared/Tracking/TrackingRequest'
    import { Fragment } from 'vue-fragment'

    export default {
        name: "Tracking",
        layout: MainLayout,
        components: {
            TrackingRequest,
            Fragment
        }
    }
</script>
