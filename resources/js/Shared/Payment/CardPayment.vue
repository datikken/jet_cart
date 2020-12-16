<template>
    <form class="payment_wrap-form_inner as-none" autocomplete="off" id="paymentFormSample"></form>
</template>

<script>
    import {mapActions} from 'vuex'
    import CardDropdown from './CardDropdown'
    import TextBtn from '@/Shared/Btns/TextBtn'
    import MaskedInput from '../Inputs/MaskedInput'

    export default {
        name: "CardPayment",
        components: {
            CardDropdown,
            TextBtn,
            MaskedInput
        },
        data: () => {
            return {}
        },
        methods: {
            ...mapActions([
                'CREATE_SIGNATURE_HASH'
            ])
        }
    }
</script>

<style>

</style>
