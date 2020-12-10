<template>
    <div class="menu_wrapper-item_secondary">
        <div class="menu_Wrapper-item_secondary-item">
            <ul class="menu_Wrapper-item_secondary-item_list">
                <li class="menu_Wrapper-item_secondary-item_list-item">
                    <inertia-link :href="route('catalog')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            Каталог
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right"/>
                </li>

                <li class="menu_Wrapper-item_secondary-item_list-item">
                    <inertia-link :href="route('about')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            О нас
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right"/>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item">
                    <inertia-link :href="route('blog')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            Блог
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right"/>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item">
                    <inertia-link :href="route('contacts')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            Контакты
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right"/>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item">
                    <inertia-link :href="route('information')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            Информация
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right"/>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item">
                    <inertia-link :href="route('hits')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            Хит - парад принтеров
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right"/>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item vip-item">
                    <img src="/images/menu/tracking.svg" alt="tracking"/>
                    <inertia-link :href="route('tracking')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            Трекинг заказа
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right" class="arrow_right"/>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item vip-item">
                    <img src="/images/menu/login.svg" alt="login"/>
                    <inertia-link :href="route('login')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            Личный кабинет
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right" class="arrow_right"/>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item vip-item">
                    <img src="/images/menu/cart.svg" alt="cart"/>
                    <inertia-link :href="route('cart')">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text">
                            Корзина
                        </span>
                    </inertia-link>
                    <img src="/images/icons/arrow_right.svg" alt="right" class="arrow_right"/>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item vip-item">
                    <img src="/images/header/contact.svg" alt="contact" class="contact_image"/>
                    <span class="menu_Wrapper-item_secondary-item_list-item-text">
                        <span class="menu_Wrapper-item_secondary-item_list-item-text_inner">
                            <span>+7 (495) 775 50 53</span>
                            <span>пн-пт 10:00 - 19:00</span>
                        </span>
                    </span>
                </li>
                <li class="menu_Wrapper-item_secondary-item_list-item">
                    <img src="/images/header/Mail.svg" alt="mailer"/>
                    <span class="menu_Wrapper-item_secondary-item_list-item-text">
                        kakayatopochta@gmail.com
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MobileMainMenuDropDown"
    }
</script>

<style>

</style>
