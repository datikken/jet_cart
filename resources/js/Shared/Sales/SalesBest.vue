<template>
    <div class="best_printers">
        <div class="best_printers_swipe-decor">
            <img src='/images/sales/decor.svg' alt="image"/>
        </div>

        <div class="best_printers_swipe-heading">
            <span>Рейтинг лучших принтеров</span>
        </div>

        <div class="sales_best">
            <div class="sales_best-wrapper">

                <div class="sales_best-wrapper_item">
                    <div class="swiper-container best_printers">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <SalesBestItem/>
                            </div>
                            <div class="swiper-slide">
                                <SalesBestItem/>
                            </div>
                            <div class="swiper-slide">
                                <SalesBestItem/>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-pagination swiper-pagination-v"></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SalesBestItem from '@/Shared/Sales/SalesBestItem';

    export default {
        name: "SalesBest",
        components: {
            SalesBestItem
        }
    }
</script>

<style scoped>

</style>
