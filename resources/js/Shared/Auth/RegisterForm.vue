<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card">
                <div class="card-header">Регистрация</div>

                <div class="card-greet register_greet">

                    <p class="card-greet_text" v-if="sieg">
                        Зарегистрируйте свой аккаунт<br/> используя любой способ
                    </p>

                    <p class="card-greet_text" v-if="!sieg" :class="{error: !sieg}">
                        <InputError :message="form.error('email')" />
                        <InputError :message="form.error('password')" />
                        <InputError :message="form.error('policy_confirm')" />
                    </p>
                </div>

                <div class="card-body">
                    <div class="form">
                        <div class="form-group row">
                            <span class="form_group_label">
                                Вы регистрируетесь как
                            </span>

                            <div class="form_type">
                                <div class="form_type-item">
                                    <div class="form_type-itemText" @click="changeUserType('urik')" data-face="urik">
                                        <span class="form_type-itemText_inner">Юр. лицо</span>
                                    </div>
                                </div>
                                <div class="form_type-item">
                                    <div class="form_type-itemText activeFormItem" @click="changeUserType('fizik')" data-face="fizik">
                                        <span class="form_type-itemText_inner">Физ. лицо</span>
                                    </div>
                                </div>
                            </div>
                            <input id="type" type="text"
                                   v-model="form.face"
                                   class="form-control"
                                   name="type"
                                   style="display: none;"
                                   value="Физ. лицо"
                                   autocomplete="type" autofocus>
                        </div>


                        <div class="form-group row">

                            <label for="email" class="form_group_label col-md-4 col-form-label text-md-right">Почта</label>

                            <div class="col-md-6">
                                <input id="emailReg"type="email"
                                       v-on:keyup="register"
                                       v-model="form.email"
                                       data-email placeholder="Введите вашу почту" class="form-control" name="email" value="" autocomplete="email">
                            </div>
                        </div>

                        <div class="form-group row password_field">
                            <span class="password_field-label" data-togglePass="password" @click="(evnt) => togglePass(evnt, 'password')"></span>
                            <label for="password" class="form_group_label col-md-4 col-form-label text-md-right">Пароль</label>

                            <div class="col-md-6">
                                <input id="passwordReg"
                                       v-on:keyup="register"
                                       v-model="form.password"
                                       data-required placeholder="Введите пароль" type="password" class="form-control password_input" name="password" autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row password_field">
                            <span class="password_field-label" data-togglePass="password" @click="(evnt) => togglePass(evnt, 'password_confirmation')"></span>
                            <label for="password_confirmation" class="form_group_label col-md-4 col-form-label password_hide text-md-right">Подтверждение пароля</label>

                            <div class="col-md-6">
                                <input id="password_confirmation"
                                       v-on:keyup="register"
                                       v-model="form.password_confirmation"
                                       data-required placeholder="Подтвердите пароль" type="password" class="form-control password_input" name="password_confirmation" autocomplete="new-password">
                            </div>
                        </div>

                        <div class="agreement">
                            <SimpleCheckbox name="agreement" @click.native="confirmPolicy" />
                            <span>
                              Я принимаю условия политики конфиденциальности
                            </span>
                        </div>


                        <TextBtn text="Регистрация" className="yellow_btn" @click.native="register" />

                    </div>


                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import InputError from '@/Jetstream/InputError'
    import SimpleCheckbox from '@/Shared/Checkboxes/SimpleCheckbox';
    import TextBtn from '@/Shared/Btns/TextBtn'

    export default {
        name: "RegisterForm",
        components: {
           InputError,
            SimpleCheckbox,
            TextBtn
        },
        props: ['name'],
        data() {
            return {
                sieg: true,
                form: this.$inertia.form({
                    name: 'Пользователь',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    policy_confirm: false,
                    type: 'fizik'
                }, {
                    bag: 'createNewUser'
                })
            }
        },
        mounted() {
            if(this.$page.errors && this.$page.errors.login) {
                this.sieg = false;
            }
        },
        methods: {
            togglePass(evnt, name) {
                let query = `[name=${name}]`;

                let passField = this.$el.querySelector(query);
                this.passShown = !this.passShown;

                if(this.passShown) {
                    passField.setAttribute('type', 'password');
                } else {
                    passField.setAttribute('type', 'text');
                }
            },
            confirmPolicy() {
                this.form.policy_confirm = !this.form.policy_confirm
            },
            register() {
                this.$inertia.post('/createNewUser', this.form, {
                    onFinish: () => {
                        if (this.$page.errors.createNewUser) {
                            this.sieg = false
                        } else {
                            this.sieg = true;
                        }
                    }
                })
            },
            changeUserType(str) {
                this.form.type = str;

                let blocks = this.$el.querySelectorAll('[data-face]');
                    blocks.forEach((block) => {
                        block.classList.remove('activeFormItem');

                        if(block.getAttribute('data-face') === str) {
                            block.classList.add('activeFormItem');
                        }

                    })
            }
        }
    }
</script>
