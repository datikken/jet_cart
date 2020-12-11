<template>
    <Fragment>

        <div class="cart">
            <div class="cart_wrap">
                <CartBreadcrumbs v-if="cartItems.length > 0"/>

                <CartEmpty :if="cartItems.length === 0" />
            </div>
        </div>
    </Fragment>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'
    import CartBreadcrumbs from '@/Shared/Breadcrumbs/CartBreadcrumbs'
    import CartEmpty from '@/Shared/Cart/CartEmpty'
    import {Fragment} from 'vue-fragment'

    export default {
        name: "Cart",
        layout: MainLayout,
        components: {
            CartBreadcrumbs,
            Fragment,
            CartEmpty
        },
        computed: {
            cartItems() {
                console.log(this.$page.cart.original.length);

                return this.$page.cart.original;
            }
        }
    }
</script>

<style>

</style>
