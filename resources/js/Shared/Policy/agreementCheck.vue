<template>
    <div class="cart_check-wrap_item" data-oferta>

        <div class="cart_check-wrap_item-group agreement_checkbox">

            <div class="agreement_error as-none" data-ofertaError @click="hideErrorResetState">
                <img src="/images/icons/tip_danger.svg" alt="tip">
                <span>Для подтверждения авторизации, необходимо ваше согласие</span>
            </div>


            <div class="as-flex">
                <SimpleCheckbox name="save" @click.native="checkAndChange" ref="agremCheck"/>

                <div class="agreement_text">
                    <p class="agreement_prgf">
                        Нажимая на кнопку &laquo;Продолжить&raquo; вы соглашаетесь с
                        <a class="agreement_link" target="_blank" href="/download/oferta.pdf">публичной офертой</a> и
                        <a class="agreement_link" target="_blank" href="/download/agreement.pdf">условиями обработки
                            персональных данных</a>
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import SimpleCheckbox from '@/Shared/Checkboxes/SimpleCheckbox'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "agreementCheck",
        data: () => {
            return {
                errObj: null
            }
        },
        components: {
            SimpleCheckbox
        },
        mounted() {
            this.errObj = this.$el.querySelector('[data-ofertaError]');
            if(this.$store.state.ofertaPolicy) {
                this.$refs.agremCheck.setChecked();
            }
        },
        computed: {
            ...mapState(['ofertaPolicy'])
        },
        watch: {
            ofertaPolicy(newVal, oldVal) {
                if (newVal != null) this.throwHideErr();
            }
        },
        methods: {
            ...mapActions(['SET_OFERTA_POLICY_STATE']),
            throwHideErr() {
                if (this.ofertaPolicy != true) {
                    this.errObj.classList.toggle('as-none')
                }
            },
            hideErrorResetState() {
                this.errObj.classList.add('as-none');
                this.SET_OFERTA_POLICY_STATE(null);
            },
            checkAndChange() {
                this.hideErrorResetState();
                this.SET_OFERTA_POLICY_STATE(true);
            }
        }
    }
</script>
