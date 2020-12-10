<template>
    <div class="app">

        <Header />
        <Menu/>

        <main>
            <slot></slot>
        </main>


        <Subscriptions/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/Shared/Header/Header'
    import Menu from '@/Shared/Menu/Menu'
    import Subscriptions from '@/Shared/Subscriptions/Subscriptions'
    import Footer from '@/Shared/Footer/Footer'

    export default {
        name: "MainLayout",
        components: {
            Header,
            Menu,
            Subscriptions,
            Footer
        },
        mounted() {
            // console.warn(this.$router);
        }
    }
</script>
