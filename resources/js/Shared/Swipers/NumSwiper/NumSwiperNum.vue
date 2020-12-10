<template>
    <div class="sales_slider-card_items-wrap-nums_num">
        <span class="sales_slider-card_items-wrap-nums_num-item">
            {{ num }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "NumSwiperNum",
        props: ['num']
    }
</script>
