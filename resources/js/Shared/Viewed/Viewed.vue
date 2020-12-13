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

    export default {
        name: "Viewed",
        components: {
            ViewedItem
        },
        data: () => ({
            allViewed: []
        }),
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
