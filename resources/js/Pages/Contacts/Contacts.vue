<template>
    <Fragment>
        <div id="map" class="ymaps"></div>

        <ContactsForms/>

    </Fragment>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'
    import ContactsForms from '@/Shared/Contacts/ContactsForms'
    import {Fragment} from 'vue-fragment'

    export default {
        name: "Contacts",
        layout: MainLayout,
        components: {
            ContactsForms,
            Fragment
        },
        mounted() {
            let that = this;

            this.$loadScript("//api-maps.yandex.ru/2.1/?lang=ru_RU")
                .then(() => {
                    that.initMap()
                })
                .catch(() => {
                    console.error('failed to load ymaps script')
                });
        },
        methods: {
            initMap() {
                ymaps.ready(function () {
                    let myMap = new ymaps.Map('map', {
                            center: [55.67967429999999, 37.6238394],
                            zoom: 17
                        }, {
                            searchControlProvider: 'yandex#search'
                        }),
                        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Мы здесь!'
                        });
                    myMap.geoObjects
                        .add(myPlacemark);
                });
            }
        }
    }
</script>
