<template>
    <div class="owl-wrapper">
        <div class="owl-controls-heading">
            <div class="owl-controls-heading-item">Новинки</div>
        </div>

        <div class="owl-carousel owl-theme">
            <OwlCard v-for="product in allProducts" :prdct="product" :key="product.photo" />
        </div>
    </div>
</template>

<script>
    import OwlCard from './OwlCard'

    export default {
        name: "Owl",
        data: () => ({
            nav: false,
            items: 4
        }),
        components: {
            OwlCard
        },
        computed: {
            allProducts() {
                return  this.$page.tenProducts.original;
            }
        },
        mounted() {
            $('.owl-carousel').owlCarousel({
                nav: true,
                margin: 15,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        }
    }
</script>
