<template>

    <div class="container" data-module="RegisterController">
        <div class="row justify-content-center">
            <div class="card">
                <div class="card-header">Вход</div>
                <div class="card-greet">
                    <p class="card-greet_text" v-if="sieg">
                        С возвращением.
                        Войдите в свой аккаунт
                    </p>

                    <p class="card-greet_text">
                        <InputError :message="form.error('email')"/>
                        <InputError :message="form.error('password')"/>
                    </p>

                </div>
                <div class="card-body login-form">
                    <div class="form">
                        <div class="form-group row">
                            <InputError :message="form.error('email')" class="mt-2"/>

                            <label for="email" class="row_label form_group_label">Почта</label>
                            <input type="email"
                                   v-model="form.email"
                                   placeholder="Введите вашу почту" class="form-control" name="email" id="email"
                                   autofocus>
                        </div>
                        <div class="form-group row password_field mb20">
                            <span class="password_field-label"></span>

                            <label for="email" class="row_label password_hide form_group_label">Пароль</label>

                            <div class="col-md-6">
                                <input
                                    v-model="form.password"
                                    id="password"
                                    type="password" placeholder="Введите ваш пароль" class="form-control"
                                    name="password">
                            </div>
                        </div>


                        <div class="form-group row mb20">
                            <div class="agreement_check">
                                <div class="form-check">

                                    <label class="form-check-label">
                                        Запомнить меня
                                    </label>
                                </div>
                                <a class="btn-link" href="" data-forgotPassword uk-toggle="target: #passReset">
                                    Забыли пароль?
                                </a>
                            </div>
                        </div>

                        <TextBtn text="Войти" className="yellow_btn" @click.native="login"/>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import InputError from '@/Jetstream/InputError'
    import TextBtn from '@/Shared/Btns/TextBtn'

    export default {
        name: "LoginForm",
        components: {
            InputError,
            TextBtn
        },
        data() {
            return {
                sieg: true,
                form: this.$inertia.form({
                    email: '',
                    password: ''
                }, {
                    bag: 'login'
                })
            }
        },
        mounted() {
            if(this.$page.errors && this.$page.errors.login) {
                this.sieg = false;
            }
        },
        methods: {
            login() {
                this.$inertia.post('/login', this.form)
                    .then(() => {
                        if (this.$page.errors && this.$page.errors.login) {
                            this.sieg = false
                        }
                    });


                console.log();
            }
        }
    }
</script>
