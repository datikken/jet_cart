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
            this.initMap()
        },
        methods: {
            initMap() {
                ymaps.ready(function () {
                    var myMap = new ymaps.Map('map', {
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

<style>

</style>
