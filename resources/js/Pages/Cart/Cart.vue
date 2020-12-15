<template>
    <Fragment>

        <div class="cart">
            <div class="cart_wrap">
                <CartBreadcrumbs :if="cartItems"/>

                <CartEmpty v-if="Objlength === 0 " />

                <CartLayout v-if="Objlength != 0 "/>

            </div>
        </div>
    </Fragment>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'
    import CartBreadcrumbs from '@/Shared/Breadcrumbs/CartBreadcrumbs'
    import CartEmpty from '@/Shared/Cart/CartEmpty'
    import {Fragment} from 'vue-fragment'
    import CartItem from "@/Shared/Cart/CartItem";
    import CartLayout from '@/Shared/Cart/CartLayout'
    import {mapState, mapActions} from 'vuex';

    export default {
        name: "Cart",
        layout: MainLayout,
        data: () => ({
            Objlength: false,
            cartTotal: false,
            cartItems: null
        }),
        methods: {
            ...mapActions(['CHECK_CART_STATE'])
        },
        components: {
            CartItem,
            CartBreadcrumbs,
            Fragment,
            CartEmpty,
            CartLayout
        },
        computed: {
            ...mapState([
                'cart'
            ])
        },
        mounted() {
            this.CHECK_CART_STATE();
        },
        watch: {
            cart(val, oldVal) {
                this.cartItems = val ? val.content : oldVal.content;
                this.Objlength = Object.keys(this.cartItems).length;
                this.cartTotal = val ? val.total : oldVal.total;
            }
        }
    }
</script>

<style>

</style>
