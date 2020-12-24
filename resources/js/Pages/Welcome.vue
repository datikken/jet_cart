<template>
    <div>

        <MainSwiper/>

        <div class="columns desktop-layout">
            <div class="left_column">
                <Banner/>
                <FeedList/>
                <Viewed/>
            </div>
            <div class="main_column">
                <Sales/>

                <NumsSwiper/>
                <SalesBest/>
                <SalesEco/>

            </div>
        </div>

        <Owl/>

    </div>
</template>

<script>
    import Header from '@/Shared/Header/Header'
    import Menu from '@/Shared/Menu/Menu'
    import MainSwiper from '@/Shared/Swipers/MainSwiper'
    import FeedList from '@/Shared/FeedList/FeedList'
    import Banner from '@/Shared/Banner/Banner'
    import Sales from '@/Shared/Sales/Sales'
    import NumsSwiper from '@/Shared/Swipers/NumSwiper/NumsSwiper'
    import MainLayout from '@/Layouts/MainLayout'
    import SalesEco from '@/Shared/Sales/SalesEco'
    import Owl from '@/Shared/Owl/Owl'
    import Viewed from "@/Shared/Viewed/Viewed";
    import SalesBest from '@/Shared/Sales/SalesBest'

    export default {
        name: "Welcome",
        data: () => ({
            images: []
        }),
        mounted() {
            let that = this;

            this.$loadScript("https://cdn.jsdelivr.net/npm/swiper@5.3.6/js/swiper.min.js")
                .then(() => {
                    that.initMap()
                })
                .catch(() => {
                    console.error('failed to load swiper script')
                });
        },
        components: {
            SalesBest,
            Viewed,
            Header,
            Menu,
            MainSwiper,
            FeedList,
            Banner,
            Sales,
            NumsSwiper,
            SalesEco,
            Owl
        },
        layout: MainLayout
    }
</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/swiper@5.3.6/css/swiper.min.css";
    @import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
    @import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css";
</style>
