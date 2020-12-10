<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <img src="https://recart.me/storage/main_slider_images/image.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="https://static.re-store.ru/upload/iblock/89a/89a2410be4b62f6e5463667078521f74.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'

    export default {
        name: 'MainSwiper',
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        components: {
            Swiper, SwiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            console.log('mounted swiper', this);

            // console.log('Current Swiper instance object', this.swiper)
        }
    }
</script>
