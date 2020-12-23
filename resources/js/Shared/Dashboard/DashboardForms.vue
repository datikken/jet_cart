<template>
    <div class="dfill">
        <div class="dfill_wrap">
            <div class="dfill_wrap-heading">
                <span>Для дальнейшего удобства заказа, рекомендуем вам заполнить аккаунт. Эти данные потребуются при формировании корзины.</span>
            </div>

            <div class="dfill_wrap-form_top">
                <div class="dfill_wrap-form_top-left">

                    <form action="/home/userAvatar" method="post" class="invisible" enctype="multipart/form-data">

                        <input type="file" class="upload_file" name="img" id="img">
                        <button type="submit">send</button>
                    </form>

                    <div class="dfill_wrap-form_top-left_inner" style=""></div>

                </div>
                <div class="dfill_wrap-form_top-right">
                    <div class="dfill_wrap-form_top-right_inner">
                        <div class="form-group one_input_form">

                            <label for="name">Имя <span>*</span></label>
                            <div class="input_wrap">

                                <input type="text" class="form-control" name="name" placeholder="Имя" v-model="name">

                                <div class="form-group-btn" @click="setName">
                                    <span>
                                        изменить
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group one_input_form">

                            <label for="name">Фамилия <span>*</span></label>
                            <div class="input_wrap">
                                <input type="text" class="form-control" name="lastname" placeholder="Фамилия"
                                       v-model="last_name">
                                <div class="form-group-btn" @click="setLastName">
                                     <span>
                                        изменить
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group one_input_form">

                            <label for="name">Телефон <span>*</span></label>

                            <div class="input_wrap">
                                <input type="number" class="form-control" name="tel" placeholder="Телефон"
                                       v-model="tel">
                                <div class="form-group-btn" @click="setTel">
                                    <span>
                                        изменить
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group one_input_form">

                            <label for="name">Адрес электронной почты <span>*</span></label>
                            <div class="input_wrap" data>
                                <input type="text" class="form-control" name="email"
                                       placeholder="Адрес электронной почты" v-model="email">
                                <div class="form-group-btn">
                                    <span>
                                        изменить
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <a class="dfill_change" href="#">изменить пароль</a>

        <div class="dchange">

                <div class="form-group input_wrap">
                    <label for="name">Действуйщий пароль<span>*</span></label>
                    <input id="password" type="password" class="form-control" name="current_password"
                           autocomplete="off">
                </div>

                <div class="form-group input_wrap">
                    <label for="name">Новый пароль<span>*</span></label>
                    <input id="new_password" type="password" class="form-control" name="new_password"
                           autocomplete="off">
                </div>

                <div class="form-group input_wrap">
                    <label for="name">Подтвердите новый пароль<span>*</span></label>
                    <input id="new_confirm_password" type="password" class="form-control" name="new_confirm_password"
                           autocomplete="current-password">
                </div>

                <MagicBtn className="magic_btn" text="Сохранить изменения"/>


            <div class="dchange_remind">
                <p>Поля отмеченые <span>*</span> обязательны к заполнению</p>
            </div>
        </div>
    </div>
</template>

<script>
    import MagicBtn from '@/Shared/Btns/MagicBtn'

    export default {
        name: "DashboardForms",
        data: () => ({
            name: '',
            last_name: '',
            tel: '',
            email: ''
        }),
        mounted() {
            let user = this.$page.user;

            this.name = user.name;
            this.last_name = user.last_name;
            this.tel = user.tel;
            this.email = user.email;
        },
        methods: {
            setName() {
                let url = '/setName';
                let dataObj = {
                    name: this.name
                }

                this.ajaxCall(url, dataObj)
            },
            setLastName() {
                let url = '/setLastName';
                let dataObj = {
                    last_name: this.last_name
                }

                this.ajaxCall(url, dataObj)
            },
            setTel() {
                let url = '/setTel';
                let dataObj = {
                    tel: this.tel
                }

                this.ajaxCall(url, dataObj)
            },
            setEmail() {
                let url = '/email';
                let dataObj = {
                    email: this.email
                }

                this.ajaxCall(url, dataObj)
            },
            ajaxCall(url, dataObj) {
                fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': window.token
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(dataObj)
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(text => {
                        return console.log(text);
                    })
                    .catch(error => console.error(error));
            }
        },
        components: {
            MagicBtn
        }
    }
</script>

<style scoped>

</style>
