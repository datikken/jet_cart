<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="sales_slider">
        <swiper-slide>
            <NumSwiperCard/>
        </swiper-slide>
        <swiper-slide>
            <NumSwiperCard/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import NumSwiperCard from './NumSwiperCard'

    export default {
        name: 'NumsSwiper',
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
            Swiper, SwiperSlide, NumSwiperCard
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            // console.log('Current Swiper instance object', this.swiper)
        }
    }
</script>

<style>

</style>
