<template>
    <div class="menu">
        <div class="menu_wrapper">

            <div class="menu_wrapper-item" @mouseenter="DesktopDropdownTrigger" @mouseleave="closeDesktopDropdown">

                <div class="menu_wrapper-item_hamburger" @click="MobileDropdownTrigger">
                    <img src="/images/menu/mhamburger.svg" alt="hamburger" class="hamburger"/>
                    <inertia-link class="menu_wrapper-item_hamburger-link" :href="route('index')">
                        <img src='/images/menu/mlogo.png' alt="logo" class="menu_wrapper-item_hamburger-logo"/>
                    </inertia-link>
                </div>

                <DesktopMainMenuDropDown/>

                <div class="desktop-hide">
                    <MobileMainMenuDropDown/>
                </div>

            </div>

            <div class="menu_wrapper-item">
                <div class="menu_wrapper-item_search" data-searchTrigger>
                    <div class="menu_wrapper-item_search_input">
                        <Input/>
                    </div>
                    <div class="menu_wrapper-item_search_button" @click="searchWidthController">
                        <img src="/images/menu/zoomin.svg" alt="icon"/>
                    </div>
                </div>
            </div>

            <div class="menu_wrapper-item">
                <inertia-link :href="route('tracking')" class="menu_wrapper-item_tracking">
                    <img class="menu_wrapper-item_tracking_icon" src="/images/menu/menu_point.svg" alt="status"/>
                    <div class="menu_wrapper-item_tracking_text">
                        <span>Статус заказа</span>
                    </div>
                </inertia-link>
            </div>

            <div class="menu_wrapper-item">
                <inertia-link :href="route('login')" class="menu_wrapper-item_personal">
                    <img class="menu_wrapper-item_personal_icon" src="/images/menu/menu_man.svg" alt="cabinet"/>
                    <div class="menu_wrapper-item_personal_text">
                        <span>Личный кабинет</span>
                    </div>
                </inertia-link>
            </div>

            <div class="menu_wrapper-item">
                <div class="menu_wrapper-item_cart">
                    <inertia-link :href="route('cart')">
                        <div class="menu_wrapper-item_cart_icon" :if="this.cart">

                            <img src="/images/menu/cart.svg" alt="cart" v-if="this.cart.qnt > 0" />
                            <img src="/images/menu/empty_cart.svg" alt="cart" v-else />

                            <span class="menu_wrapper-item_cart_icon-amount" v-if="this.cart.qnt > 0">{{ this.cart.qnt }}</span>
                        </div>
                    </inertia-link>
                </div>
            </div>

        </div>

        <SearchList />

    </div>
</template>

<script>
    import Input from '../Search/Input';
    import SearchList from '../Search/SearchList'
    import DesktopMainMenuDropDown from './DesktopMainMenuDropDown'
    import MobileMainMenuDropDown from './MobileMainMenuDropDown'
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "Menu",
        data: () => ({
            cartVal: {}
        }),
        components: {
            Input,
            SearchList,
            DesktopMainMenuDropDown,
            MobileMainMenuDropDown
        },
        mounted() {
            this.fixedMenuOnScroll();
            this.checkMenuFixedOrNot();
            this.CHECK_CART_STATE();
        },
        computed: {
            ...mapState([
                'cart'
            ])
        },
        watch: {
            cart(val, oldVal) {
                this.cartVal = val ? val : oldVal
            }
        },
        methods: {
            ...mapActions([
                'CHECK_CART_STATE'
            ]),
            checkMenuFixedOrNot() {
                if (window.pageYOffset > 0 && this.sresBlock) {
                    this.$el.classList.add('topFixedMenu');
                    this.sresBlock.style.top = '50px';
                }
            },
            fixedMenuOnScroll() {
                let that = this;

                window.addEventListener('scroll', function () {
                    if(!that.sresBlock) {
                        that.sresBlock = document.querySelector('.sres_wrap');
                    }

                    if (window.pageYOffset >= 60) {
                        that.$el.classList.add('topFixedMenu');
                        that.sresBlock.style.top = '50px';
                    } else {
                        that.$el.classList.remove('topFixedMenu');
                        that.sresBlock.style.top = '110px';
                    }
                })
            },
            closeDesktopDropdown() {
                this.$children[0].hideAllDropDowns();
            },
            DesktopDropdownTrigger() {
                this.$children[0].showDesktopMenuDropDown();
            },
            MobileDropdownTrigger() {
                let body = document.querySelector('body');

                if (!this.openedMenu) {
                    this.openedMenu = true;
                    body.classList.add('overflow')
                    document.querySelector('.menu_wrapper-item_secondary').classList.add('as-visible');
                    document.querySelector('.menu_wrapper-item_secondary').classList.add('mobile_menu');
                } else {
                    this.openedMenu = false;
                    body.classList.remove('overflow')
                    document.querySelector('.menu_wrapper-item_secondary').classList.remove('as-visible');
                    document.querySelector('.menu_wrapper-item_secondary').classList.remove('mobile_menu');
                }
            },
            searchWidthController() {
                if (window.screen.width < 1000) {
                    let search = document.querySelector('[data-searchTrigger]');

                    if (!this.openedSearch) {
                        search.classList.add('search_width');
                        this.openedSearch = true;
                    } else {
                        search.classList.remove('search_width');
                        this.openedSearch = false;
                    }
                }
            }
        }
    }
</script>

<style>

</style>
