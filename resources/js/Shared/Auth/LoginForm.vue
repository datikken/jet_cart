<template>

    <div class="container" data-module="RegisterController">
        <div class="row justify-content-center">
            <div class="card">
                <div class="card-header">Вход</div>
                <div class="card-greet">
                    <p class="card-greet_text" v-show="sieg">
                        С возвращением.<br/>
                        Войдите в свой аккаунт
                    </p>

                    <p class="card-greet_text" v-show="emailError" :class="{error: !sieg}">
                       {{ emailError }}
                    </p>

                    <p class="card-greet_text" v-show="!sieg" :class="{error: !sieg}">
                        <InputError :message="form.error('email')"/>
                        <InputError :message="form.error('password')"/>
                    </p>
                </div>
                <div class="card-body login-form">
                    <div class="form">
                        <div class="form-group row">

                            <label for="email" class="row_label form_group_label">Почта</label>
                            <input type="email"
                                   v-on:keyup="validate"
                                   v-model="form.email"
                                   placeholder="Введите вашу почту" class="form-control"
                                   name="email"
                                   id="email"
                                   autocomplete="email"
                                   autofocus>
                        </div>
                        <div class="form-group row password_field mb20">
                            <span class="password_field-label" data-togglePass
                                  @click="(evnt) => togglePass(evnt)"></span>

                            <label for="password" class="row_label password_hide form_group_label">Пароль</label>

                            <div class="col-md-6">
                                <input
                                    v-model="form.password"
                                    id="password"
                                    v-on:keyup="validate"
                                    type="password"
                                    placeholder="Введите ваш пароль"
                                    class="form-control"
                                    autocomplete="current-password"
                                    name="password">
                            </div>
                        </div>


                        <div class="form-group row mb20">
                            <div class="agreement_check">
                                <SimpleCheckbox name="agreement" @click.native="confirmPolicy"/>

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
    import SimpleCheckbox from '@/Shared/Checkboxes/SimpleCheckbox'
    import {passwordLength} from "@/vanilla/functions/validation/passwordLength";
    import {validateEmail} from "@/vanilla/functions/validation/validateEmail";

    export default {
        name: "LoginForm",
        components: {
            InputError,
            TextBtn,
            SimpleCheckbox
        },
        data() {
            return {
                sieg: true,
                passShown: false,
                emailError: false,
                form: this.$inertia.form({
                    email: '',
                    password: ''
                }, {
                    bag: 'login'
                })
            }
        },
        mounted() {
            if (this.$page.errors && this.$page.errors.login) {
                this.sieg = false;
            }
        },
        methods: {
            togglePass(evnt) {
                let passField = this.$el.querySelector('[name="password"]');
                this.passShown = !this.passShown;

                if (this.passShown) {
                    passField.setAttribute('type', 'password');
                } else {
                    passField.setAttribute('type', 'text');
                }
            },
            validate() {
                let emailStat = validateEmail(this.form.email);
                let passStat = passwordLength(this.form.password);

                if(typeof emailStat === 'string') {
                    this.sieg = false
                    this.emailError = emailStat;
                } else {
                    this.sieg = true;
                    this.emailError = false;
                }
            },
            login() {
                this.$inertia.post('/login', this.form, {
                    onFinish: () => {
                        if (this.$page.errors.login) {
                            this.sieg = false
                            return;
                        }

                        this.sieg = true;
                    }
                })
            }
        }
    }
</script>
