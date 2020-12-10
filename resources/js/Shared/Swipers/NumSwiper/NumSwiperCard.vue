<template>
    <div class="sales_slider-card">
        <div class="sales_slider-card_prod">
            <div class="sales_slider-card_prod-item">
                <img src="/images/sales/salesProdd.png" />
            </div>
        </div>

        <div class="sales_slider-card_items">
            <div class="sales_slider-card_items-wrap">
                <div class="sales_slider-card_items-wrap-heading">Картридж</div>
                <div class="sales_slider-card_items-wrap-title">T2 TC-H80A</div>
                <div class="sales_slider-card_items-wrap-desc">
                    (Аналог HP CF280A)
                </div>

                <div class="sales_slider-card_items-wrap-nums">
                    <NumSwiperNum num="0" />
                    <NumSwiperNum num="0" />
                    <NumSwiperNum num="0" />
                    <NumSwiperNum num="0" />
                </div>

                <div class="mobile-hide">
                    <TextBtn text="Успеть Купить" className="sales_slider_btn action_btn" />
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    import NumSwiperNum from './NumSwiperNum'
    import TextBtn from '@/Shared/Btns/TextBtn'

    export default {
        name: "NumSwiperCard",
        components: {
            NumSwiperNum,
            TextBtn
        }
    }
</script>
