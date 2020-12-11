<template>

    <div class="empty_cart">
        <h2 class="empty_cart-head">Ваша корзина еще пуста</h2>
        <p class="empty_cart-paragraph">Для удобства наполнения корзины, Вы можете воспользоваться поиском
            или каталогом товаров</p>
        <inertia-link :href="route('catalog')">
            <TextBtn className="empty_cart-btn magic_btn" text="перейти в каталог" />
        </inertia-link>
    </div>

</template>

<script>
    import TextBtn from '@/Shared/Btns/TextBtn'
    export default {
        name: "CartEmpty",
        components: {
            TextBtn
        }
    }
</script>

<style scoped>

</style>
