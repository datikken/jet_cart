<template>
    <div class="delivery_type-item" @click="setDeliveryType" :data-val="name">
        <SimpleCheckbox :name="name" ref="box" />
        <span>{{ text }}</span>
    </div>
</template>

<script>
    import SimpleCheckbox from '../Checkboxes/SimpleCheckbox'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "DeliveryHelperItem",
        props: ['text', 'name'],
        data: function() {
            return {
                checked: false
            }
        },
        components: {
            SimpleCheckbox
        },
        computed: {
            ...mapGetters([
                'blockDeliveryHelper',
            ])
        },
        methods: {
            ...mapActions([
                'SET_DELIVERY_TYPE',
                'SET_ADDITIONAL_FORMS'
            ]),
            setDeliveryType(e) {
                let type = document.querySelector('.delivery_type');

                if(type) {
                    let checkboxes = document.querySelectorAll('.checkbox-wrap');
                    checkboxes.forEach((box) => {
                        let img = box.querySelector('img');
                        img && img.classList.add('invisible');
                    })

                    if(!this.checked) {
                        let img = e.currentTarget.querySelector('img')
                        img.classList.remove('invisible');
                    }
                }

                this.SET_DELIVERY_TYPE(e.currentTarget.dataset.val);
                this.SET_ADDITIONAL_FORMS(e.currentTarget.dataset.val);

                console.warn('del helper item', e.currentTarget.dataset.val)

            }
        }
    }
</script>

<style>

</style>
