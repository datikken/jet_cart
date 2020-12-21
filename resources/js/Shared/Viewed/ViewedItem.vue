<template>
    <inertia-link class="viewed_wrapper-item" :href="`/catalog/${prdct.id}`">
        <div class="viewed_wrapper-item_image">
            <img
                onerror="this.src = '/images/unnecessary/owl-swiper.svg';" :src="modifyPrImage()" />

        </div>
        <div class="viewed_wrapper-item_text">
            <div class="viewed_wrapper-item_text-heading">
                <span class="viewed_wrapper-item_text-heading-item">
                  {{ prdct.name_buh | truncate(30) }}
                </span>
            </div>
            <div class="viewed_wrapper-item_text-price">
                <span>{{ prdct.price | floor }}</span>
                <img src="/images/icons/rub.svg" alt="rub" />
            </div>
        </div>
    </inertia-link>
</template>

<script>
    export default {
        name: "ViewedItem",
        props: ['prdct'],
        filters: {
            floor: function (value) {
                return parseInt(value);
            }
        },
        methods: {
            modifyPrImage() {
                let path = JSON.parse(this.prdct.photo);

                return path.small;
            }
        }
    }
</script>

<style>

</style>
