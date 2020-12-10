<template>
    <div class="viewed">
        <div class="viewed-item_heading">
            <span class="viewed_wrapper-item_heading-text">Просмотренные товары</span>
        </div>

        <div class="viewed_wrapper">
           <ViewedItem
               :prdct="product"
               v-for="product in allProducts"
               :key="product.name" />
        </div>
    </div>

</template>

<script>
    import ViewedItem from './ViewedItem';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "Viewed",
        components: {
            ViewedItem
        },
        data: () => ({
            allViewed: []
        }),
        created() {
            this.GET_VIEWED_PRODUCTS();
        },
        methods: {
            ...mapActions([
                'GET_VIEWED_PRODUCTS'
            ]),
        },
        computed: {
            allProducts() {
                return  this.$page.tenProducts.original;
            }
        },
        watch: {
            viewedProducts(newVal, oldVal) {
                if(newVal) this.allViewed = newVal;
            }
        }
    }
</script>

<style>

</style>
