<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="slide in slides" :key="slide.name">
            <ImageComp :path="slide.path" alt_text="slide" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import ImageComp from '@/Shared/Image/ImageComp'

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
            Swiper, SwiperSlide, ImageComp
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            },
            slides() {
                return this.$page.slides.original
            }
        }
    }
</script>
