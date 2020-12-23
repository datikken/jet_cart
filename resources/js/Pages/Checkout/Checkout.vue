<template>
    <Fragment>
        <Breadcrumbs/>
        <div class="cart_check-wrapper">

            <Fizik v-if="this.userFace === 'fizik' "/>
            <Urik v-if="this.userFace === 'urik' "/>

            <OrderList v-if="this.userFace" />

        </div>
    </Fragment>
</template>

<script>
    import Fizik from '@/Shared/Customer/Fizik'
    import Urik from '@/Shared/Customer/Urik'
    import Loader from '@/Shared/Loader/Loader'
    import OrderList from '@/Shared/Orders/OrdersList'
    import {mapGetters, mapActions} from 'vuex'
    import MainLayout from '@/Layouts/MainLayout'
    import Breadcrumbs from '@/Shared/Breadcrumbs/Breadcrumbs'
    import {Fragment} from 'vue-fragment'

    export default {
        name: "Checkout",
        data: function () {
            return {
                userFace: null
            }
        },
        layout: MainLayout,
        components: {
            Fizik,
            Urik,
            Loader,
            OrderList,
            Breadcrumbs,
            Fragment
        },
        methods: {
            ...mapActions([
                'CHANGE_PROGRESS_STEP'
            ]),
        },
        mounted() {
            // this.CHANGE_PROGRESS_STEP(1);
            this.userFace = this.$page.user ? this.$page.user.face : 'fizik';

            if(this.$page.user === null) {
                this.$inertia.visit('login')
            }
        }
    }
</script>
