<template>
    <div class="header">
        <div class="header_wrapper">
            <div class="header_wrapper-item">
                <inertia-link :href="route('index')">
                    <div class="header_wrapper-item_logo">
                        <img class="header_wrapper-item_logo-item" src="/images/header/main_logo.svg" alt="Logo"/>
                    </div>
                </inertia-link>
            </div>
            <div class="header_wrapper-item">
                <ul class="header_wrapper-item_menu">
                    <li class="header_wrapper-item_menu-item">
                        <inertia-link :href="route('catalog')" class="header_wrapper-item_menu-item_link">Каталог</inertia-link>
                    </li>
                    <li class="header_wrapper-item_menu-item">
                        <inertia-link preserve-scroll :href="route('information')" class="header_wrapper-item_menu-item_link">Информация</inertia-link>
                        <ul class="header_wrapper-item_menu-item-secondary">
                            <inertia-link class="header_wrapper-item_menu-item-secondary_item"
                               :href="route('information')">
                                <li>Test</li>
                            </inertia-link>
                        </ul>
                    </li>
                    <li class="header_wrapper-item_menu-item">
                        <inertia-link :href="route('hits')" class="header_wrapper-item_menu-item_link">Хит - парад принтеров</inertia-link>
                    </li>
                    <!--<li class="header_wrapper-item_menu-item">-->
                        <!--<inertia-link :href="route('sales')" class="header_wrapper-item_menu-item_link">Акции</inertia-link>-->
                    <!--</li>-->
                    <li class="header_wrapper-item_menu-item">
                        <inertia-link :href="route('blog')" class="header_wrapper-item_menu-item_link">Блог</inertia-link>
                    </li>
                    <li class="header_wrapper-item_menu-item">
                        <inertia-link :href="route('about')" class="header_wrapper-item_menu-item_link">О нас</inertia-link>
                    </li>
                    <li class="header_wrapper-item_menu-item">
                        <inertia-link preserve-scroll :href="route('contacts')" class="header_wrapper-item_menu-item_link">Контакты</inertia-link>
                    </li>
                </ul>
            </div>
            <div class="header_wrapper-item">
                <div class="header_wrapper-item_contacts">
                    <img class="header_wrapper-item_contacts-icon" src='/images/header/header_tel.svg' alt="Logo"/>
                    <a href="tel:88005556633" class="header_wrapper-item_contacts-tel">8 800 555 66 33</a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>
