<template>

    <div class="left_column">
        <Filters />
        <Viewed />
    </div>

</template>

<script>
    import ResizeObserver from '@/@/js/functions/ResizeObserver';
    import utils from '@/@/js/functions/utils';
    import Filters from '../Filters/Filters';
    import Viewed from '../Viewed/Viewed';

    export default {
        name: "LeftColumn",
        components: {
            Filters,
            Viewed
        }
    }
</script>

<style>

</style>
