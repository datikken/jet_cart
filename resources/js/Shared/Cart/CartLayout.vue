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


            <CartItem v-for="cartItem in cartItems" :data="cartItem"/>


        </div>

        <div class="cart_wrap-item_inner-total">
            <div class="cart_wrap-item_inner-total_inner">
                <span class="cart_wrap-item_inner-total_inner-item">Общая сумма</span>
                <span class="cart_wrap-item_inner-total_inner-item" data-cartpriceval>
                        {{ total }}
                        <img src="/images/icons/rub_fat.svg" alt="rub" class="cart_wrap-item-total_icon"/>
                    </span>
            </div>
            <a class="cart_wrap-item_inner-total_button magic_btn" href="#">
                    <span class="cart_wrap-item_inner-total_button-item">
                        оформить заказ
                    </span>
            </a>
        </div>

    </div>
</template>

<script>
    import CartItem from './CartItem';

    export default {
        name: "CartLayout",
        components: {
            CartItem
        },
        props: ['cartItems', 'total']
    }
</script>

<style scoped>

</style>
