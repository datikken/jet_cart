<template>
    <input
        v-on:keyup="serverCall"
        v-model="txtInput"
        type="search"
        name="searchText"
        autocomplete="off"
        placeholder="Введите модель принтера или артикул картриджа"
    />
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Input",
        data: function() {
            return {
                txtInput: ''
            }
        },
        mounted() {
            // console.warn(this.$page);
        },
        methods: {
            ...mapActions([
                'SEND_GOOGLE_ANALYTICS'
            ]),
            serverCall: function() {
                let payload = this.txtInput.toLowerCase()

                this.$store.commit('getFilteredProducts', payload);

                let gObj = {
                    category: 'search',
                    eventAction: 'click',
                    eventLabel: 'search',
                    eventValue: this.txtInput
                };

                this.SEND_GOOGLE_ANALYTICS(gObj);
            }
        }
    }
</script>
