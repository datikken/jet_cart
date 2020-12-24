<template>
    <div class="contacts">
        <div class="contacts_wrap">

            <div class="contacts_column">
                <div class="contacts_column-inner">
                    <div class="contacts_wrap-inner">

                        <div class="contacts-inf_grid">

                            <div class="contacts_wrap-item">


                                <div class="contacts_wrap-item_inner">
                                    <div class="contacts_wrap-item_inner-location">
                                        <img src='/images/icons/location.svg' alt="Location"/>
                                    </div>
                                </div>

                                <div class="contacts_wrap-item_inner">
                                    <div class="contacts_wrap-item_inner-item">
                                        <span class="contacts_wrap-item_inner-item-text">Адрес:</span>
                                    </div>
                                    <div class="contacts_wrap-item_inner-item">
                                    <span class="contacts_wrap-item_inner-item-desc">
                                        115230 Россия, Москва, Варшавское шоссе, дом, 36, строение 8, 2-й подъезд, этаж 2, офис 1578
                                    </span>
                                    </div>
                                </div>


                            </div>

                            <div class="contacts_wrap-item">
                                <div class="contacts_wrap-item_inner">
                                    <div class="contacts_wrap-item_inner-contacts">
                                        <img src='/images/header/contact.svg' alt="Contacts"/>
                                    </div>
                                </div>
                                <div class="contacts_wrap-item_inner">
                                    <div class="contacts_wrap-item_inner-item">
                                        <span class="contacts_wrap-item_inner-item-text">Контакты</span>
                                    </div>
                                    <div class="contacts_wrap-item_inner-item">
                                <span class="contacts_wrap-item_inner-item-tel">
                                    +7 (495) 775-50-53
                                </span>
                                        <span class="contacts_wrap-item_inner-item-mail">
                                kakayto_pochta@domen.com
                        </span>
                                    </div>
                                    <div class="contacts_wrap-item_socials">
                                        <div class="contacts_wrap-item_socials-item">
                                            <div class="telegram">
                                            </div>
                                        </div>
                                        <div class="contacts_wrap-item_socials-item">
                                            <div class="facebook">
                                            </div>
                                        </div>
                                        <div class="contacts_wrap-item_socials-item">
                                            <div class="vk">
                                            </div>
                                        </div>
                                        <div class="contacts_wrap-item_socials-item">
                                            <div class="insta">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="desktop-hide">
                        <ContactsTiming/>
                    </div>

                    <div class="contacts_wrap-item contacts_feedback">
                        <div class="contacts_wrap-item_inner">
                            <div class="contacts_wrap-item_inner-feedback">
                                <img src="/images/icons/feedback.svg" alt="feedback"/>
                            </div>
                        </div>
                        <div class="contacts_wrap-item_inner">
                            <div class="contacts_wrap-item_inner-item">
                                <span class="contacts_wrap-item_inner-item-text">Обратная связь</span>
                            </div>

                            <div class="contacts_wrap-item_inner-item">

                                <div class="cfeedback">
                                    <div class="cfeedback_wrap">
                                        <div class="cfeedback_wrap-row fio_fields">
                                            <div class="cfeedback_wrap-row_item">
                                                <div class="cfeedback_wrap-row_item_label">
                                                    <span>Имя</span>
                                                </div>

                                                <div class="cfeedback_wrap-row_item_input">
                                                    <input type="text" name="name"
                                                           v-model="name"
                                                           class="cfeedback_wrap-row_item_input-item"
                                                           placeholder="Введите ваше имя">
                                                </div>
                                            </div>

                                            <div class="cfeedback_wrap-row_item">
                                                <div class="cfeedback_wrap-row_item_label">
                                                    <span>Фамилия</span>
                                                </div>

                                                <div class="cfeedback_wrap-row_item_input">
                                                    <input type="text" name="lastname"
                                                           v-model="last_name"
                                                           class="cfeedback_wrap-row_item_input-item"
                                                           placeholder="Введите вашу фамилию">
                                                </div>
                                            </div>
                                        </div>


                                        <div class="cfeedback_wrap-row">

                                            <input type="text" name="theme" class="invisible" value="пожелания"
                                                   data-theme/>

                                            <div class="cfeedback_wrap-row_item_label">
                                                <span>Тема обращения</span>
                                            </div>

                                            <div class="cfeedback_wrap-row_item-row">

                                                <div class="cfeedback_wrap-row_item-row_inner active" data-themeSwitch
                                                     @click="(evnt) => themeSwitch(evnt)">
                                                    <span>Пожелания</span>
                                                </div>
                                                <div class="cfeedback_wrap-row_item-row_inner" data-themeSwitch
                                                     @click="(evnt) => themeSwitch(evnt)">
                                                    <span>Вопрос</span>
                                                </div>
                                                <div class="cfeedback_wrap-row_item-row_inner" data-themeSwitch
                                                     @click="(evnt) => themeSwitch(evnt)">
                                                    <span>Претензия</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="cfeedback_wrap-row">
                                            <div class="cfeedback_wrap-row_item_label">
                                                <span>Текст</span>
                                            </div>
                                            <div class="cfeedback_wrap-row_item_textarea">
                                                <textarea
                                                    v-model="text"
                                                    name="message" id="" cols="30" rows="10"
                                                          placeholder="Напишите свое обращение. Мы будем рады ответить вам на ваши вопросы"></textarea>
                                            </div>
                                        </div>

                                        <TextBtn className="yellow_btn" text="Отправить" @click.native="submitProposal"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mobile-hide">
                    <ContactsTiming/>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    import TextBtn from '@/Shared/Btns/TextBtn'
    import ContactsTiming from '@/Shared/Contacts/ContactsTiming'
    import {mapActions} from 'vuex';

    export default {
        name: "ContactsForms",
        components: {
            TextBtn,
            ContactsTiming
        },
        data: () => ({
            name: '',
            last_name: '',
            text: '',
            text_error: false
        }),
        methods: {
            ...mapActions([
                'SHOW_NOTIFICATION'
            ]),
            submitProposal() {
                let theme = this.$el.querySelector('.active');
                let span = theme.querySelector('span').innerText;
                let that = this;

                let dataObj = {
                    name: this.name,
                    last_name: this.last_name,
                    text: this.text,
                    theme: span
                }

                if(this.$page.user === null) {
                    this.$inertia.visit('login')
                    return;
                }

                if(this.text === '') {
                    this.SHOW_NOTIFICATION({msg: 'Введите текст', type: 'danger'});
                    return;
                }

                fetch('/sendContactsProposal', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': window.token
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(dataObj)
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        this.SHOW_NOTIFICATION({msg: 'Успех', type: 'success'});
                    });
            },
            themeSwitch(evnt) {
                let target = evnt.currentTarget;

                let allBlocks = this.$el.querySelectorAll('[data-themeSwitch]');
                allBlocks.forEach((blck) => {
                    blck.classList.remove('active')
                })

                target.classList.add('active');
            }
        }
    }
</script>
