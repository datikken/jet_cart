<template>
    <Fragment>

        <div class="cart">
            <div class="cart_wrap">
                <CartBreadcrumbs :if="cartItems"/>

                <CartEmpty v-if="Objlength === 0 " />

                <CartLayout :if="Objlength > 0" :total="total" />

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

    export default {
        name: "Cart",
        layout: MainLayout,
        data: () => ({
            total: null
        }),

        components: {
            CartItem,
            CartBreadcrumbs,
            Fragment,
            CartEmpty,
            CartLayout
        },
        created() {
            this.cartItems = this.$page.cart.original.content;
            this.total = this.$page.cart.original.total;
            this.Objlength = Object.keys(this.cartItems).length;
        }
    }
</script>

<style>

</style>
