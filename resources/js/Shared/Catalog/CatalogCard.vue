<template>

    <div class="product">
        <div class="product_wrapper">
            <div class="product_wrapper-item">
                <div class="product_wrapper-item_name">
                </div>
                <div class="product_wrapper-item_heading">
                    <span class="product_wrapper-item_heading-item">
                        {{ data.name }}
                    </span>
                </div>

                <div class="product_wrapper-item_amount">
                    <img src="/images/icons/alot.svg" alt="amount"/>
                    <span class="product_wrapper-item_amount-item">Много</span>
                </div>
            </div>
            <div class="product_wrapper-item product_wrapper-itemContent">
                <inertia-link class="product_wrapper-item_image product_link" :href="route('catalog.view', data.id)">
                    <img onerror="this.src = '/images/unnecessary/owl-swiper.svg';"
                    :src="`/product_images/${this.params.brend}/SMALL/${data.photo}.png`" alt="">
                </inertia-link>
                <a class="product_wrapper-item_overlay" href="#modal-1" uk-toggle="target: #modal-1" :data-id="data.id" @click="loadProductModal(data.id)">
                    <div class="product_wrapper-item_overlay_wrapper">
                        <div class="product_wrapper-item_overlay_wrapper-item">
                            <span class="product_wrapper-item_overlay_wrapper-item_text">быстрый просмотр</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="product_wrapper-item">
                <div class="product_wrapper-item_head">
                    <span class="product_wrapper-item_head-item">Картридж</span>
                    <span class="product_wrapper-item_head-item">IC-HLOR70A</span>
                </div>
                <div class="product_wrapper-item_price">
                    <span class="product_wrapper-item_price-item">{{ price }}</span>
                    <img src="/images/icons/rub.svg" alt="cur"/>
                </div>

                <BuyBtn :id="data.id" className="animated_btn round_btn" />

            </div>
        </div>
    </div>

</template>

<script>
    import BuyBtn from '@/Shared/Btns/BuyBtn';
    import TextBtn from '@/Shared/Btns/TextBtn';
    import {mapActions} from 'vuex'

    export default {
        name: "CatalogCard",
        props: ['data'],
        components: {
            BuyBtn,
            TextBtn
        },
        data: () => ({
            params: {},
            price: ''
        }),
        methods: {
            ...mapActions(['SEND_GOOGLE_ANALYTICS']),
            loadProductModal(id) {
                let prd = this.$page.products.filter((el) => el.id === id);

                this.$store.dispatch('GET_PRODUCT_BY_ID', prd);

                let gObj = {
                    category: 'catalog modal',
                    eventAction: 'click',
                    eventLabel: 'catalog modal opened',
                    eventValue: id
                };

                this.SEND_GOOGLE_ANALYTICS(gObj);
            }
        },
        created() {
            this.params = JSON.parse(this.$props.data.params)
            this.price = parseInt(this.$props.data.price);
        }
    }
</script>
