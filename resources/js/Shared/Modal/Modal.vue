<template>
    <div id="modal-1" class="uk-flex-top" uk-modal>
        <div id="modal_content" class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
            <div class="prdet">
                <div class="prdet_wrap">
                    <div class="prdet_close uk-modal-close"></div>
                    <div class="prdet_wrap-item">
                        <div class="prdet_wrap-item_img">
                            <img
                                v-if="product"
                                class="prdet_wrap-item_img_inner"
                                onerror="this.src = '/images/unnecessary/owl-swiper.svg'"
                                :src="`/product_images/${product.params.brend}/SMALL/${product.photo}.png`"
                                alt="image"
                            />
                        </div>
                    </div>
                    <div class="prdet_wrap-item">
                        <div class="prdet_wrap-item-head">
                            <span class="prdet_wrap-item-head-item"
                                  v-if="product">
                                {{ product.name }}
                            </span>
                        </div>
                        <div class="prdet_wrap-item-desc">
                            <span class="prdet_wrap-item-desc-item" v-if="product">{{ product.params.cvet }} тонер-картридж {{ product.artikul }} для принтеров и МФУ:</span>
                        </div>

                        <div class="prdet_wrap-item-icons">
                            <div
                                v-if="product && product.params.cvet === 'Черный'"
                                class="prdet_wrap-item-icons-item"
                                style="background-image: url('/images/product/drip.svg')"
                            ></div>
                            <div
                                v-if="product &&  product.params.cvet === 'Трехцветный'"
                                class="prdet_wrap-item-icons-item"
                                style="background-image: url('/images/product/drip_gradient.svg')"
                            ></div>

                            <div
                                v-if="product && product.params.cvet === 'Желтый'"
                                class="prdet_wrap-item-icons-item"
                            >
                                <svg
                                    class="details_wrap-info_item-icons_icon"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="25" cy="25" r="24.5" stroke="#40404C"/>
                                    <path
                                        d="M33.4286 30.094C33.4286 34.4604 29.7509 38 25.2143 38C20.6777 38 17 34.4604 17 30.094C17 25.7277 25.2143 13 25.2143 13C25.2143 13 33.4286 25.7277 33.4286 30.094Z"
                                        fill="#40404C"
                                    />
                                    <path
                                        d="M33.4286 30.094C33.4286 34.4604 29.7509 38 25.2143 38C20.6777 38 17 34.4604 17 30.094C17 25.7277 25.2143 13 25.2143 13C25.2143 13 33.4286 25.7277 33.4286 30.094Z"
                                        fill="#fdd935"
                                        stroke="#fdd935"
                                    />
                                </svg>
                            </div>
                            <div
                                v-if="product && product.params.cvet === 'Пурпурный'"
                                class="prdet_wrap-item-icons-item">
                                <svg class="details_wrap-info_item-icons_icon" width="50" height="50"
                                     viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24.5" stroke="#40404C"/>
                                    <path
                                        d="M33.4286 30.094C33.4286 34.4604 29.7509 38 25.2143 38C20.6777 38 17 34.4604 17 30.094C17 25.7277 25.2143 13 25.2143 13C25.2143 13 33.4286 25.7277 33.4286 30.094Z"
                                        fill="#40404C"/>
                                    <path
                                        d="M33.4286 30.094C33.4286 34.4604 29.7509 38 25.2143 38C20.6777 38 17 34.4604 17 30.094C17 25.7277 25.2143 13 25.2143 13C25.2143 13 33.4286 25.7277 33.4286 30.094Z"
                                        fill="#ff54a4" stroke="#ff54a4"/>
                                </svg>
                            </div>
                            <div
                                v-if="product && product.params.cvet === 'Голубой'"
                                class="prdet_wrap-item-icons-item">
                                <svg class="details_wrap-info_item-icons_icon" width="50" height="50"
                                     viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24.5" stroke="#40404C"/>
                                    <path
                                        d="M33.4286 30.094C33.4286 34.4604 29.7509 38 25.2143 38C20.6777 38 17 34.4604 17 30.094C17 25.7277 25.2143 13 25.2143 13C25.2143 13 33.4286 25.7277 33.4286 30.094Z"
                                        fill="#40404C"/>
                                    <path
                                        d="M33.4286 30.094C33.4286 34.4604 29.7509 38 25.2143 38C20.6777 38 17 34.4604 17 30.094C17 25.7277 25.2143 13 25.2143 13C25.2143 13 33.4286 25.7277 33.4286 30.094Z"
                                        fill="#00b7f7" stroke="#00b7f7"/>
                                </svg>
                            </div>
                            <div
                                v-if="product && product.params.cvet === 'Серый'"
                                class="prdet_wrap-item-icons-item">
                                <svg class="details_wrap-info_item-icons_icon" width="50" height="50"
                                     viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24.5" stroke="#40404C"/>
                                    <path
                                        d="M33.4286 30.094C33.4286 34.4604 29.7509 38 25.2143 38C20.6777 38 17 34.4604 17 30.094C17 25.7277 25.2143 13 25.2143 13C25.2143 13 33.4286 25.7277 33.4286 30.094Z"
                                        fill="#40404C"/>
                                    <path
                                        d="M33.4286 30.094C33.4286 34.4604 29.7509 38 25.2143 38C20.6777 38 17 34.4604 17 30.094C17 25.7277 25.2143 13 25.2143 13C25.2143 13 33.4286 25.7277 33.4286 30.094Z"
                                        fill="#686866" stroke="#686866"/>
                                </svg>
                            </div>

                            <div
                                v-if="product && product.params.chip"
                                class="prdet_wrap-item-icons-item"
                                style="background-image: url('/images/product/chip.svg')"
                            ></div>
                            <div
                                v-if="product && product.params.new"
                                class="prdet_wrap-item-icons-item"
                                style="background-image: url('/images/product/new.svg')"
                            ></div>
                            <div
                                v-if="product && product.params.STMC"
                                class="prdet_wrap-item-icons-item"
                                style="background-image: url('/images/product/stmc.svg')"
                            ></div>
                        </div>

                        <div class="prdet_wrap-item-stuff">
                            <span>Фотобарабан Mitsubishi Chemical Corporation, тонер Mitsubishi Chemical Corporation</span>
                            <span>ОЕМ-номер: <b>CE285A.</b></span>
                            <span>
                                <b v-if="product"
                                   class="prder_wrap-item-res">
                                    {{ product.params.Ресурс }}
                                </b> текстовых страниц <b>А4</b> согласно ASTM F1856/STMC для картриджей «Всё в одном»
                            </span>
                        </div>

                        <div class="prdet_wrap-icons_ctas">
                            <div class="prdet_wrap-icons_ctas-amount">
                                <PriceBtn
                                    v-if="product"
                                    :price="parseInt(product.price)"/>
                            </div>
                            <div class="prdet_wrap-icons_ctas-increase">
                                <span class="prdet_wrap-icons_ctas-increase-text">Количество (шт)</span>
                                <AmountBtn
                                    v-if="product"
                                    :id="product.id"
                                    quantity="1"
                                />
                            </div>
                            <div class="prdet_wrap-icons_ctas-buy">
                                <BuyBtn
                                    v-if="product"
                                    text="в корзину"
                                    class="yellow_btn animated_btn uk-modal-close"
                                    :id="product.id"
                                />
                            </div>
                            <a class="prdet_wrap-icons_ctas-details"  v-if="product" :href="`/product/${product.id}`">
                                <TextBtn class="flat_btn" text="подробнее"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="prdet_comp">
                    <div class="prdet_comp-item">
                        <span class="prdet_comp-item-head">Подходит</span>
                    </div>

                    <div class="prdet_comp-item">
                        <div class="prdet_table">

                            <div class="prdet_table_head">
                                <div class="prdet_table_head_item">
                                    <span>Марка</span>
                                </div>
                                <div class="prdet_table_head_item">
                                    <span>Модель</span>
                                </div>
                            </div>

                            <div class="prdet_table_item"
                                 v-if="cape"
                                 v-for="index in cape">
                                <div class="prdet_table_item_inner">
                                    <span>{{ index.brand }}</span>
                                </div>
                                <div class="prdet_table_item_inner">
                                    <span v-for="md in index.data">{{ md.model }}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PriceBtn from "@/Shared/Btns/PriceBtn";
    import BuyBtn from "@/Shared/Btns/BuyBtn";
    import AmountBtn from "@/Shared/Btns/AmountBtn";
    import TextBtn from "@/Shared/Btns/TextBtn";
    import {mapState} from 'vuex';

    export default {
        name: "Modal",
        components: {
            BuyBtn,
            PriceBtn,
            AmountBtn,
            TextBtn,
        },
        props: ['prd'],
        data: () => ({
            product: null,
            cape: null
        }),
        computed: {
            ...mapState([
                'singleProduct'
            ])
        },
        created() {
            console.log(this.product);
        },
        watch: {
            singleProduct(val, oldVal) {
                this.product = val ? val[0] : oldVal[0];

                let paramObj = JSON.parse(this.product.params);
                let capeObj = JSON.parse(this.product.cape);

                let result = Object.values(capeObj.reduce((a,{brand, ...props})=>{
                    if(!a[brand])
                        a[brand] = Object.assign([], {brand, data : [props]});
                    else
                        a[brand].data.push(props);
                    return a;
                },{}));

                this.product.params = paramObj;
                this.cape = result;
            }
        }
    };
</script>
