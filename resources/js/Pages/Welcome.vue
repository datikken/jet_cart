<template>
    <div>

        <MainSwiper />

        <div class="columns desktop-layout">
            <div class="left_column">
                <Banner/>
                <FeedList />
                <Viewed />
            </div>
            <div class="main_column">
                <Sales/>
                <NumsSwiper/>
                <SalesEco />
            </div>
        </div>

        <Owl />

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
    import Viewed from "../Shared/Viewed/Viewed";

    export default {
        name: "Welcome",
        data: () => ({
            images: []
        }),
        components: {
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
