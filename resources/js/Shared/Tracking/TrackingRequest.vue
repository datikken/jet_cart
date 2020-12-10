<template>
    <Fragment>
        <Breadcrumbs />

        <div class="treq">
            <div class="treq_wrap">
                <div class="treq_head">
                    <h1 class="treq_heading">Отследить ваш заказ</h1>
                    <span class="treq_desc">Для отслеживания вашего заказа, пожалуйста, введите ваш идентификатор заказа в поле ниже</span>
                </div>

                <form @submit.prevent="submit" class="treq_form">
                    <div class="treq_inputs">
                        <div class="treq_form_gr">
                            <InputError :message="form.error('numb')" class="mt-2"/>

                            <label for="numb">Номер заказа</label>
                            <input v-model="form.numb" id="numb" type="text" name="numb"
                                   placeholder="Введите номер заказа из письма подтверждения заказа">
                        </div>
                        <div class="treq_form_gr">
                            <InputError :message="form.error('email')" class="mt-2"/>

                            <label for="email">Электронный адрес</label>
                            <input v-model="form.email" id="email" type="text" name="email"
                                   placeholder="Адрес электронной почты, использованный при оформлении заказа">
                        </div>
                    </div>

                    <TextBtn text="продолжить" className="treq_form_btn yellow_btn" @click.native="submit"/>

                </form>
            </div>
        </div>
    </Fragment>
</template>

<script>
    import TextBtn from '@/Shared/Btns/TextBtn'
    import InputError from '@/Jetstream/InputError'
    import Breadcrumbs from '@/Shared/Breadcrumbs/Breadcrumbs'
    import { Fragment } from 'vue-fragment'

    export default {
        name: "TrackingRequest",
        data() {
            return {
                form: this.$inertia.form({
                    numb: '',
                    email: ''
                }, {
                    bag: 'trackingGet',
                    resetOnSuccess: true
                })
            }
        },
        components: {
            TextBtn,
            InputError,
            Breadcrumbs,
            Fragment
        },
        methods: {
            submit() {
                this.$inertia.post('/trackingGet', this.form)
            }
        }
    }
</script>
