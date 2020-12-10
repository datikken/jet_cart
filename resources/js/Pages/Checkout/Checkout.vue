<template>
    <div class="cart_check-wrapper">
        <Loader v-if="!this.$store.state.user"/>

        <Fizik v-if="this.userFace && this.userFace === 'fizik' "/>
        <Urik v-if="this.userFace && this.userFace === 'urik' "/>

        <OrderList v-if="this.$store.state.user"/>
    </div>
</template>

<script>
    import Fizik from '@/Shared/Checkout/Fizik'
    import Urik from '@/Shared/Checkout/Urik'
    import Loader from '@/Shared/Loader/Loader'
    import OrderList from '@/Shared/Orders/OrdersList'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Checkout",
        data: function () {
            return {
                userFace: null
            }
        },
        components: {
            Fizik,
            Urik,
            Loader,
            OrderList,
        },
        methods: {
            ...mapActions([
                'GET_USERS_INFO',
                'CHANGE_PROGRESS_STEP'
            ]),
        },
        computed: {
            ...mapGetters(['user'])
        },
        watch: {
            user(newVal, oldVal) {
                if (newVal) {
                    this.userFace = newVal.user[0].face;
                }
            }
        },
        created() {
            if(!this.userFace) {
                this.GET_USERS_INFO();
            }
        },
        mounted() {
            this.CHANGE_PROGRESS_STEP(1);

            this.userFace = this.$store.state.user.user[0].face;
        }
    }
</script>

<style>
    .cart_check-wrapper {
        display: flex;
    }
</style>
