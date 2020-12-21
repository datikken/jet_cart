<template>
    <div class="cart_wrap-item">
        <div class="cart_wrap-item_inner">
            <div class="cart_wrap-item_inner-heading">
                <span class="cart_wrap-item_inner-heading-text">корзина</span>
            </div>
        </div>
        <div class="cart_wrap-item_inner-table_row cart_table-headings">
            <div class="cart_wrap-item_inner-table_row-col">
                <span class="cart_wrap-item_inner-table_row-col-heading">Картридж</span>
            </div>
            <div class="cart_wrap-item_inner-table_row-col">
                <span class="cart_wrap-item_inner-table_row-col-heading">Цена (шт)</span>
            </div>
            <div class="cart_wrap-item_inner-table_row-col">
                <span class="cart_wrap-item_inner-table_row-col-heading">Количество</span>
            </div>
            <div class="cart_wrap-item_inner-table_row-col">
                <span class="cart_wrap-item_inner-table_row-col-heading">Общая сумма</span>
            </div>
        </div>


        <div class="cart_content">


            <CartItem v-for="cartItem in cartItems" :data="cartItem" :key="cartItems.id"/>


        </div>

        <div class="cart_wrap-item_inner-total">
            <div class="cart_wrap-item_inner-total_inner">
                <span class="cart_wrap-item_inner-total_inner-item">Общая сумма</span>
                <span class="cart_wrap-item_inner-total_inner-item" data-cartpriceval>
                        {{ total }}
                        <img src="/images/icons/rub_fat.svg" alt="rub" class="cart_wrap-item-total_icon"/>
                    </span>
            </div>
            <inertia-link :href="route('checkout')">
                <MagicBtn text="оформить заказ" className="magic_btn"/>
            </inertia-link>
        </div>

    </div>
</template>

<script>
    import CartItem from './CartItem';
    import {mapState, mapActions} from 'vuex';
    import MagicBtn from '@/Shared/Btns/MagicBtn'

    export default {
        name: "CartLayout",
        components: {
            CartItem,
            MagicBtn
        },
        data: () => ({
            cartItems: [],
            total: false
        }),
        methods: {
            ...mapActions(['CHECK_CART_STATE'])
        },
        mounted() {
            this.CHECK_CART_STATE();
        },
        computed: {
            ...mapState([
                'cart'
            ])
        },
        watch: {
            cart(val, oldVal) {
                this.cartItems = val ? val.content : oldVal.content;
                this.total = val ? val.total : oldVal.total;
            }
        }
    }
</script>

<style scoped>

</style>
