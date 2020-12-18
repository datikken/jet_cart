<template>
    <div class="cart_wrap-item_inner-table_row cart_item_row" :data-id="data.id">
        <div class="cart_wrap-item_inner-table_row-col">
            <div class="cart_wrap-item_inner-table_row_heading desktop-hide">
                <span>Картридж</span>
            </div>

            <div class="cart_wrap-item_inner-table_row-col_img">
                <span @click="remove" class="remove_icon" style="background-image: url('/images/unnecessary/cart_close.svg')"></span>
                <img class="carousel_card-wrapper_item-image" onerror="this.src = '/images/unnecessary/owl-swiper.svg';" :src="image"/>
            </div>


            <div class="cart_wrap-item_inner-table_row-col_desc">

                <div class="cart_wrap-item_inner-table_row-col_desc-head">
                    <span>Чёрный тонер-картридж</span>
                </div>
                <div class="cart_wrap-item_inner-table_row-col_desc-info">
                    <span>{{ data.name }}</span>
                </div>
                <div class="cart_wrap-item_inner-table_row-col_desc-about">
                    <span>для принтеров и МФУ:</span>
                </div>
            </div>

        </div>
        <div class="cart_wrap-item_inner-table_row-col">
            <div class="cart_wrap-item_inner-table_row-col_price">
                <span class="desktop-hide">Цена (шт)</span>
                <div class="cart_wrap-item_inner-table_row-col_price-val">
                <span class="cart_wrap-item_inner-table_row-col_price-val-item">
                    {{ data.price }}
                    <img src="/images/icons/rub_fat.svg" alt="rub" />
                </span>
                </div>
            </div>
        </div>
        <div class="cart_wrap-item_inner-table_row-col">
            <span class="desktop-hide">Количество (шт)</span>
            <div class="cart_wrap-item_inner-table_row-col_btns">
                <div class="cart_wrap-item_inner-table_row-col_btns-btn" style="margin-right: 34px;">
                    <div class="cart_wrap-item_inner-table_row-col col_amount">
                        <span>Количество (шт)</span>
                    </div>

                    <AmountBtn :id="data.id" :quantity="data.qty" :rowId="data.rowId"/>

                </div>
            </div>
        </div>

        <div class="cart_wrap-item_inner-table_row-col">
            <span class="desktop-hide">Общая сумма товаров (шт)</span>
            <div class="cart_wrap-item_inner-table_row-col_total">
                {{ total }}
                <img src="/images/icons/rub_fat.svg" alt="rub" />
            </div>
        </div>

        <div class="desktop-hide">
            <div class="cart_wrap-item_inner-table_row-col product_delete" style="padding-top: 15px;">
                <span class="desktop-hide"> Удалить товар </span>
                <div class="cart_wrap-item_inner-table_row-col_total">
                    <span @click="remove" class="remove_icon" style="background-image: url('/images/unnecessary/cart_close.svg')"></span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import AmountBtn from '@/Shared/Btns/AmountBtn'
    import { mapActions } from 'vuex'

    export default {
        name: "CartItem",
        components: {
            AmountBtn
        },
        props: ['data'],
        data: () => ({
            image: null,
            total: null
        }),
        methods: {
            ...mapActions([
                'DELETE_PRODUCT_FROM_CART'
            ]),
            remove() {
                let btn = this.$el.querySelector('.remove_icon');
                let id = this.$props.data.id;

                this.DELETE_PRODUCT_FROM_CART({id});
            }
        },
        mounted() {
            let imgjsn = JSON.parse(this.$props.data.photo);
            this.image = imgjsn ? imgjsn.small : '';
            this.total = this.$props.data.price * this.$props.data.qty;
        }
    }
</script>
