(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{11:function(t,s,e){"use strict";var a={name:"TextBtn",props:["text","className"]},r=e(1),o=Object(r.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{class:this.className},[s("span",[this._v(this._s(this.text))])])}),[],!1,null,null,null);s.a=o.exports},20:function(t,s,e){"use strict";var a={props:["message"]},r=e(1),o=Object(r.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.message,expression:"message"}]},[s("p",{staticClass:"text-sm text-red-600"},[this._v("\n        "+this._s(this.message)+"\n    ")])])}),[],!1,null,null,null);s.a=o.exports},232:function(t,s,e){"use strict";e.r(s);var a=e(26),r=e(20),o=e(11),i={name:"LoginForm",components:{InputError:r.a,TextBtn:o.a},data:function(){return{form:this.$inertia.form({email:"",password:""},{bag:"login"})}},methods:{login:function(){this.$inertia.post("/login",this.form)}}},n=e(1),l=Object(n.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container",attrs:{"data-module":"RegisterController"}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("Вход")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"card-body login-form"},[e("form",{attrs:{method:"POST",action:"login","data-loginForm":"true"}},[e("div",{staticClass:"form-group row"},[e("InputError",{staticClass:"mt-2",attrs:{message:t.form.error("email")}}),t._v(" "),e("label",{staticClass:"row_label form_group_label",attrs:{for:"email"}},[t._v("Почта")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Введите вашу почту",name:"email",id:"email",autofocus:""},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}})],1),t._v(" "),e("div",{staticClass:"form-group row password_field mb20"},[e("span",{staticClass:"password_field-label"}),t._v(" "),e("label",{staticClass:"row_label password_hide form_group_label",attrs:{for:"email"}},[t._v("Пароль")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"Введите ваш пароль",name:"password"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}})])]),t._v(" "),t._m(1),t._v(" "),e("TextBtn",{attrs:{text:"Войти",className:"yellow_btn"},nativeOn:{click:function(s){return t.login(s)}}})],1)])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-greet"},[s("p",{staticClass:"card-greet_text",attrs:{"data-auth":""}},[this._v("\n                    С возвращением.\n                    Войдите в свой аккаунт\n                ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row mb20"},[s("div",{staticClass:"agreement_check"},[s("div",{staticClass:"form-check"},[s("label",{staticClass:"form-check-label",attrs:{for:"remember"}},[this._v("\n                                    Запомнить меня\n                                ")])]),this._v(" "),s("a",{staticClass:"btn-link",attrs:{href:"","data-forgotPassword":"","uk-toggle":"target: #passReset"}},[this._v("\n                                Забыли пароль?\n                            ")])])])}],!1,null,null,null).exports,c=e(47),m={name:"RegisterForm",components:{InputError:r.a,SimpleCheckbox:c.a,TextBtn:o.a},props:["name"],data:function(){return{form:this.$inertia.form({name:"Пользователь",email:"",password:"",password_confirmation:"",policy_confirm:!1},{bag:"createNewUser"})}},methods:{confirmPolicy:function(){this.form.policy_confirm=!this.form.policy_confirm},register:function(){this.$inertia.post("/createNewUser",this.form)}}},d=Object(n.a)(m,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("Регистрация")]),t._v(" "),e("div",{staticClass:"card-greet register_greet"},[e("p",{staticClass:"card-greet_text"},[t._v("\n                    Зарегистрируйте свой аккаунт используя любой способ\n                ")]),t._v(" "),e("InputError",{attrs:{message:t.form.error("email")}}),t._v(" "),e("InputError",{attrs:{message:t.form.error("password")}}),t._v(" "),e("InputError",{attrs:{message:t.form.error("policy_confirm")}})],1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{attrs:{method:"POST","data-registerForm":"true"}},[e("div",{staticClass:"form-group row"},[e("span",{staticClass:"form_group_label"},[t._v("\n                            Вы регистрируетесь как\n                        ")]),t._v(" "),t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.face,expression:"form.face"}],staticClass:"form-control",staticStyle:{display:"none"},attrs:{id:"type",type:"text",name:"type",value:"Физ. лицо",autocomplete:"type",autofocus:""},domProps:{value:t.form.face},on:{input:function(s){s.target.composing||t.$set(t.form,"face",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"form_group_label col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Почта")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email","data-email":"",placeholder:"Введите вашу почту",name:"email",value:"",autocomplete:"email"},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row password_field"},[e("label",{staticClass:"form_group_label col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Пароль")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control password_input",attrs:{id:"password","data-required":"",placeholder:"Введите пароль",type:"password",name:"password",autocomplete:"new-password"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row password_field"},[e("label",{staticClass:"form_group_label col-md-4 col-form-label password_hide text-md-right",attrs:{for:"password_confirmation"}},[t._v("Подтверждение пароля")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control password_input",attrs:{id:"password_confirmation","data-required":"",placeholder:"Подтвердите пароль",type:"password",name:"password_confirmation",autocomplete:"new-password"},domProps:{value:t.form.password_confirmation},on:{input:function(s){s.target.composing||t.$set(t.form,"password_confirmation",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"agreement"},[e("SimpleCheckbox",{attrs:{name:"agreement"},nativeOn:{click:function(s){return t.confirmPolicy(s)}}}),t._v(" "),e("span",[t._v("\n                          Я принимаю условия политики конфиденциальности\n                        ")])],1),t._v(" "),e("TextBtn",{attrs:{text:"Регистрация",className:"yellow_btn"},nativeOn:{click:function(s){return t.register(s)}}})],1)])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form_type"},[s("div",{staticClass:"form_type-item"},[s("div",{staticClass:"form_type-itemText"},[s("span",{staticClass:"form_type-itemText_inner"},[this._v("Юр. лицо")])])]),this._v(" "),s("div",{staticClass:"form_type-item activeFormItem"},[s("div",{staticClass:"form_type-itemText"},[s("span",{staticClass:"form_type-itemText_inner"},[this._v("Физ. лицо")])])])])}],!1,null,null,null).exports,p={name:"Login",layout:a.a,components:{RegisterForm:d,LoginForm:l},mounted:function(){console.log(this.$page)}},u=Object(n.a)(p,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"main"},[s("LoginForm"),this._v(" "),s("div",{staticClass:"auth-decor"}),this._v(" "),this._m(0),this._v(" "),s("RegisterForm")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"auth-pick"},[s("span",{staticClass:"auth-pick_item"},[this._v("или")])])}],!1,null,null,null);s.default=u.exports},47:function(t,s,e){"use strict";var a={name:"SimpleCheckbox",props:["name"],data:function(){return{checked:!1}},methods:{setChecked:function(){var t=this.$el.querySelector('[type="checkbox"]');this.checked=!this.checked,this.checked?t.setAttribute("checked",!0):t.removeAttribute("checked")}}},r=e(1),o=Object(r.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"checkbox",on:{click:this.setChecked}},[s("div",{staticClass:"checkbox-wrap"},[s("input",{staticClass:"checkbox-wrap_input invisible",attrs:{type:"checkbox",name:this.name}}),this._v(" "),s("img",{staticClass:"checkbox-wrap_arrow",class:{invisible:!this.checked},attrs:{src:"/images/icons/arrow_right.svg",alt:"icon"}})])])}),[],!1,null,null,null);s.a=o.exports}}]);