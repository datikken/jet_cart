(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(t,e,s){"use strict";var a={name:"Loader"},i=s(1),r=Object(i.a)(a,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue_loader"},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,null,null);e.a=r.exports},152:function(t,e,s){"use strict";var a=s(8);function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={name:"Input",data:function(){return{txtInput:""}},mounted:function(){},methods:r(r({},Object(a.b)(["SEND_GOOGLE_ANALYTICS"])),{},{serverCall:function(){var t=this.txtInput.toLowerCase();this.$store.commit("getFilteredProducts",t);var e={category:"search",eventAction:"click",eventLabel:"search",eventValue:this.txtInput};this.SEND_GOOGLE_ANALYTICS(e)}})},c=s(1),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.txtInput,expression:"txtInput"}],attrs:{type:"search",name:"searchText",autocomplete:"off",placeholder:"Введите модель принтера или артикул картриджа"},domProps:{value:t.txtInput},on:{keyup:t.serverCall,input:function(e){e.target.composing||(t.txtInput=e.target.value)}}})}),[],!1,null,null,null).exports;var m={name:"SearchListItem",props:["data"],data:function(){return{color:"",link:"",cape:""}},created:function(t){this.link="/product/"+this.$props.data.id,this.cape=this.$props.data.cape;var e=JSON.parse(this.$props.data.params).color;this.color=function(t){var e="";switch(t){case void 0:case"Черный":e="blackCol";break;case"Трехцветный":e="tripleCol";break;case"Голубой":e="blueCol";break;case"Пурпурный":e="purpleCol";break;case"Желтый":e="yellowCol"}return e}(e)},methods:{backgroundOnHover:function(){this.color&&(this.$el.classList.add(this.color),this.$el.style.color="#fff","tripleCol"===this.color&&(this.color="tripleCol",this.$el.style.color="black"))},clearBackgroundOnHover:function(){this.color&&this.$el.classList.remove(this.color),this.$el.style.color="unset"}}},_=Object(c.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"sres_item",attrs:{href:t.link},on:{mouseover:t.backgroundOnHover,mouseleave:t.clearBackgroundOnHover}},[s("div",{staticClass:"sres_col"},[s("span",{staticClass:"sres_col_item sres_color",class:t.color})]),t._v(" "),s("div",{staticClass:"sres_col"},[s("span",{staticClass:"sres_col_item"},[t._v(t._s(t.data.artikul))])]),t._v(" "),s("div",{staticClass:"sres_col_inner"},t._l(this.cape,(function(e,a){return s("div",{key:e.id,staticClass:"sres_col_inner_item"},[s("span",{staticClass:"sres_col_item"},[t._v(t._s(a))]),t._v(" "),s("span",{staticClass:"sres_col_item",attrs:{if:e.length<=1}},t._l(e,(function(a){return s("span",{attrs:{if:e.length<=1}},[t._v(t._s(a)+" ")])})),0)])})),0)])}),[],!1,null,null,null).exports,p={name:"SearchListItemHead",props:["type"]},u=Object(c.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sres_head"},[e("div",{staticClass:"sres_head_item"},[this._v("\n        Цвет\n    ")]),this._v(" "),e("div",{staticClass:"sres_head_item"},[this._v("\n        Картридж\n    ")]),this._v(" "),e("div",{staticClass:"sres_head_item"},[this._v("\n        "+this._s(this.type)+"\n    ")])])}),[],!1,null,null,null).exports,v=s(105),d={name:"SearchList",data:function(){return{searchClosed:null}},components:{SearchListItem:_,SearchListItemHead:u,simplebar:s(250).a,Loader:v.a},created:function(){var t=this;document.addEventListener("click",(function(e){"sres"==e.currentTarget||t.searchClosed?t.searchClosed=!1:t.searchClosed=!0}))},methods:{toggleSearch:function(){this.searchClosed=!this.searchClosed}},computed:{items:function(){var t=document.querySelector(".sres");return this.$store.getters.searchProducts.forEach((function(e){e.length>0&&t&&t.classList.remove("as-none")})),this.$store.getters.searchProducts}}},h=Object(c.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sres as-none",class:{"as-none":t.searchClosed}},[s("Loader"),t._v(" "),s("div",{staticClass:"sres_wrap"},[s("div",{staticClass:"sres_close",on:{click:t.toggleSearch}}),t._v(" "),s("simplebar",{staticClass:"sres_content",attrs:{"data-simplebar-auto-hide":"true"}},[t.items[0]&&t.items[0].length>0?s("SearchListItemHead",{attrs:{type:"Принтер струйный"}}):t._e(),t._v(" "),t._l(t.items[0],(function(t){return s("div",{key:t.id},[s("SearchListItem",{attrs:{data:t}})],1)})),t._v(" "),t.items[1]&&t.items[1].length>0?s("SearchListItemHead",{attrs:{type:"Принтер лазерный"}}):t._e(),t._v(" "),t._l(t.items[1],(function(t){return s("div",{key:t.id},[s("SearchListItem",{attrs:{data:t}})],1)})),t._v(" "),t.items[2]&&t.items[2].length>0?s("SearchListItemHead",{attrs:{type:"Принтер матричный"}}):t._e(),t._v(" "),t._l(t.items[2],(function(e){return t.items[2]&&t.items[2].length>0?s("div",{key:e.id},[s("SearchListItem",{attrs:{data:e}})],1):t._e()}))],2)],1)],1)}),[],!1,null,null,null).exports;function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(Object(s),!0).forEach((function(e){w(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function w(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var C={name:"DesktopMainMenuDropDown",mounted:function(){},computed:g({},Object(a.c)(["informationPosts"])),methods:g(g({},Object(a.b)(["GET_ALL_INFORMATION_POSTS"])),{},{hideAllDropDowns:function(){var t=this.$el.querySelector("[data-informationMenuDropdown]"),e=this.$el.querySelector("[data-desktopMenuBlock]");t.classList.remove("showInformationMenuDropdown"),e.style.height="0"},hideInformationDropDown:function(){this.$el.querySelector("[data-informationMenuDropdown]").classList.remove("showInformationMenuDropdown")},showAllDropDowns:function(){var t=this.$el.querySelector("[data-informationMenuDropdown]");this.$el.querySelector("[data-desktopMenuBlock]").classList.add("showDesktopMenuDropdown"),t.classList.add("showInformationMenuDropdown")},showInformationDropDown:function(){this.$el.querySelector("[data-informationMenuDropdown]").classList.add("showInformationMenuDropdown")},showDesktopMenuDropDown:function(){var t=this.$el.querySelector("[data-desktopMenuBlock]"),e=40*this.$el.querySelectorAll("[data-mainDropdownItem]").length;t.style.height="".concat(e,"px")}})},b={name:"MobileMainMenuDropDown"};function y(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function k(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?y(Object(s),!0).forEach((function(e){O(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function O(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var D={name:"Menu",components:{Input:l,SearchList:h,DesktopMainMenuDropDown:Object(c.a)(C,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"menu_wrapper-item_menuText-link",attrs:{href:"/"}},[s("div",{staticClass:"menu_wrapper-item_menuText",on:{mouseleave:t.hideAllDropDowns,mouseenter:t.showDesktopMenuDropDown}},[s("img",{staticClass:"menu_wrapper-item_menuText-decor",attrs:{src:"/images/menu/menu_decor.svg",alt:"decor"}}),t._v(" "),s("div",{staticClass:"menu_wrapper-item_menuText-header"},[s("span",{staticClass:"menu_wrapper-item_menuText-header_item"},[t._v("МЕНЮ")]),t._v(" "),s("ul",{staticClass:"menu_wrapper-item-main_menu-item-text_secondary secondaryBottom",attrs:{"data-informationMenuDropdown":""},on:{mouseenter:t.showAllDropDowns}},t._l(t.informationPosts,(function(e){return s("li",{key:e.id,staticClass:"menu_wrapper-item-main_menu-item-text_secondary-text"},[s("a",{attrs:{href:"/information"}},[s("span",[t._v(t._s(e.category))])])])})),0),t._v(" "),s("ul",{staticClass:"menu_wrapper-item-main_menu",attrs:{"data-desktopMenuBlock":""},on:{mouseenter:t.showDesktopMenuDropDown}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("li",{staticClass:"menu_wrapper-item-main_menu-item",attrs:{"data-mainDropdownItem":""},on:{mouseleave:t.hideInformationDropDown,mouseenter:t.showInformationDropDown}},[t._m(4)]),t._v(" "),t._m(5)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_wrapper-item-main_menu-item",attrs:{"data-mainDropdownItem":""}},[e("span",{staticClass:"menu_wrapper-item-main_menu-item-text"},[e("a",{attrs:{href:"/catalog"}},[this._v("Каталог")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_wrapper-item-main_menu-item",attrs:{"data-mainDropdownItem":""}},[e("span",{staticClass:"menu_wrapper-item-main_menu-item-text"},[e("a",{attrs:{href:"/about"}},[this._v("О нас")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_wrapper-item-main_menu-item",attrs:{"data-mainDropdownItem":""}},[e("span",{staticClass:"menu_wrapper-item-main_menu-item-text"},[e("a",{attrs:{href:"/hits"}},[this._v("Хит парад принтеров")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_wrapper-item-main_menu-item",attrs:{"data-mainDropdownItem":""}},[e("span",{staticClass:"menu_wrapper-item-main_menu-item-text"},[e("a",{attrs:{href:"/blog"}},[this._v("Блог")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu_wrapper-item-main_menu-item-text"},[e("span",{staticClass:"menu_wrapper-item-main_menu-item-text_inner"},[this._v("Информация")]),this._v(" "),e("img",{attrs:{src:"/images/icons/arrow_right.svg",alt:"arrow"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_wrapper-item-main_menu-item",attrs:{"data-mainDropdownItem":""}},[e("span",{staticClass:"menu_wrapper-item-main_menu-item-text"},[e("a",{attrs:{href:"/contacts"}},[this._v("Контакты")])])])}],!1,null,null,null).exports,MobileMainMenuDropDown:Object(c.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu_wrapper-item_secondary"},[s("div",{staticClass:"menu_Wrapper-item_secondary-item"},[s("ul",{staticClass:"menu_Wrapper-item_secondary-item_list"},[s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item"},[s("inertia-link",{attrs:{href:t.route("catalog")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        Каталог\n                    ")])]),t._v(" "),s("img",{attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item"},[s("inertia-link",{attrs:{href:t.route("about")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        О нас\n                    ")])]),t._v(" "),s("img",{attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item"},[s("inertia-link",{attrs:{href:t.route("blog")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        Блог\n                    ")])]),t._v(" "),s("img",{attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item"},[s("inertia-link",{attrs:{href:t.route("contacts")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        Контакты\n                    ")])]),t._v(" "),s("img",{attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item"},[s("inertia-link",{attrs:{href:t.route("information")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        Информация\n                    ")])]),t._v(" "),s("img",{attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item"},[s("inertia-link",{attrs:{href:t.route("hits")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        Хит - парад принтеров\n                    ")])]),t._v(" "),s("img",{attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item vip-item"},[s("img",{attrs:{src:"/images/menu/tracking.svg",alt:"tracking"}}),t._v(" "),s("inertia-link",{attrs:{href:t.route("tracking")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        Трекинг заказа\n                    ")])]),t._v(" "),s("img",{staticClass:"arrow_right",attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item vip-item"},[s("img",{attrs:{src:"/images/menu/login.svg",alt:"login"}}),t._v(" "),s("inertia-link",{attrs:{href:t.route("login")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        Личный кабинет\n                    ")])]),t._v(" "),s("img",{staticClass:"arrow_right",attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),s("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item vip-item"},[s("img",{attrs:{src:"/images/menu/cart.svg",alt:"cart"}}),t._v(" "),s("inertia-link",{attrs:{href:t.route("cart")}},[s("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[t._v("\n                        Корзина\n                    ")])]),t._v(" "),s("img",{staticClass:"arrow_right",attrs:{src:"/images/icons/arrow_right.svg",alt:"right"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item vip-item"},[e("img",{staticClass:"contact_image",attrs:{src:"/images/header/contact.svg",alt:"contact"}}),this._v(" "),e("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[e("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text_inner"},[e("span",[this._v("+7 (495) 775 50 53")]),this._v(" "),e("span",[this._v("пн-пт 10:00 - 19:00")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu_Wrapper-item_secondary-item_list-item"},[e("img",{attrs:{src:"/images/header/Mail.svg",alt:"mailer"}}),this._v(" "),e("span",{staticClass:"menu_Wrapper-item_secondary-item_list-item-text"},[this._v("\n                    kakayatopochta@gmail.com\n                ")])])}],!1,null,null,null).exports},computed:{cart:function(){return this.$store.state.cart?this.$store.state.cart:{}}},mounted:function(){this.fixedMenuOnScroll(),this.checkMenuFixedOrNot()},created:function(){this.CHECK_CART_STATE(),this.GET_USERS_INFO()},methods:k(k({},Object(a.b)(["CHECK_CART_STATE","GET_USERS_INFO"])),{},{checkMenuFixedOrNot:function(){window.pageYOffset>0&&this.sresBlock&&(this.$el.classList.add("topFixedMenu"),this.sresBlock.style.top="50px")},fixedMenuOnScroll:function(){var t=this;window.addEventListener("scroll",(function(){t.sresBlock||(t.sresBlock=document.querySelector(".sres_wrap")),window.pageYOffset>=60?(t.$el.classList.add("topFixedMenu"),t.sresBlock.style.top="50px"):(t.$el.classList.remove("topFixedMenu"),t.sresBlock.style.top="110px")}))},closeDesktopDropdown:function(){this.$children[0].hideAllDropDowns()},DesktopDropdownTrigger:function(){this.$children[0].showDesktopMenuDropDown()},MobileDropdownTrigger:function(){var t=document.querySelector("body");this.openedMenu?(this.openedMenu=!1,t.classList.remove("overflow"),document.querySelector(".menu_wrapper-item_secondary").classList.remove("as-visible"),document.querySelector(".menu_wrapper-item_secondary").classList.remove("mobile_menu")):(this.openedMenu=!0,t.classList.add("overflow"),document.querySelector(".menu_wrapper-item_secondary").classList.add("as-visible"),document.querySelector(".menu_wrapper-item_secondary").classList.add("mobile_menu"))},searchWidthController:function(){if(window.screen.width<1e3){var t=document.querySelector("[data-searchTrigger]");this.openedSearch?(t.classList.remove("search_width"),this.openedSearch=!1):(t.classList.add("search_width"),this.openedSearch=!0)}}})},x=Object(c.a)(D,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("div",{staticClass:"menu_wrapper"},[s("div",{staticClass:"menu_wrapper-item",on:{mouseenter:t.DesktopDropdownTrigger,mouseleave:t.closeDesktopDropdown}},[s("div",{staticClass:"menu_wrapper-item_hamburger",on:{click:t.MobileDropdownTrigger}},[s("img",{staticClass:"hamburger",attrs:{src:"/images/menu/hamburger.svg",alt:"hamburger"}}),t._v(" "),s("inertia-link",{staticClass:"menu_wrapper-item_hamburger-link",attrs:{href:t.route("index")}},[s("img",{staticClass:"menu_wrapper-item_hamburger-logo",attrs:{src:"/images/menu/mlogo.png",alt:"logo"}})])],1),t._v(" "),s("DesktopMainMenuDropDown"),t._v(" "),s("div",{staticClass:"desktop-hide"},[s("MobileMainMenuDropDown")],1)],1),t._v(" "),s("div",{staticClass:"menu_wrapper-item"},[s("div",{staticClass:"menu_wrapper-item_search",attrs:{"data-searchTrigger":""}},[s("div",{staticClass:"menu_wrapper-item_search_input"},[s("Input")],1),t._v(" "),s("div",{staticClass:"menu_wrapper-item_search_button",on:{click:t.searchWidthController}},[s("img",{attrs:{src:"/images/menu/zoomin.svg",alt:"icon"}})])])]),t._v(" "),s("div",{staticClass:"menu_wrapper-item"},[s("inertia-link",{staticClass:"menu_wrapper-item_tracking",attrs:{href:t.route("tracking")}},[s("img",{staticClass:"menu_wrapper-item_tracking_icon",attrs:{src:"/images/menu/menu_point.svg",alt:"status"}}),t._v(" "),s("div",{staticClass:"menu_wrapper-item_tracking_text"},[s("span",[t._v("Статус заказа")])])])],1),t._v(" "),s("div",{staticClass:"menu_wrapper-item"},[s("inertia-link",{staticClass:"menu_wrapper-item_personal",attrs:{href:t.route("login")}},[s("img",{staticClass:"menu_wrapper-item_personal_icon",attrs:{src:"/images/menu/menu_man.svg",alt:"cabinet"}}),t._v(" "),s("div",{staticClass:"menu_wrapper-item_personal_text"},[s("span",[t._v("Личный кабинет")])])])],1),t._v(" "),s("div",{staticClass:"menu_wrapper-item"},[s("div",{staticClass:"menu_wrapper-item_cart"},[s("inertia-link",{attrs:{href:t.route("cart")}},[s("div",{staticClass:"menu_wrapper-item_cart_icon",attrs:{if:this.cart}},[this.cart.totalQuantity?s("img",{attrs:{src:"/images/menu/cart.svg",alt:"cart","data-cartIcon":""}}):s("img",{attrs:{src:"/images/menu/empty_cart.svg",alt:"cart","data-cartIcon":""}}),t._v(" "),s("span",{staticClass:"menu_wrapper-item_cart_icon-amount",attrs:{"data-cartAmountVal":""}},[t._v(t._s(this.cart.totalQuantity))])])])],1)])]),t._v(" "),s("SearchList")],1)}),[],!1,null,null,null);e.a=x.exports},156:function(t,e,s){"use strict";var a={name:"Header"},i=s(1),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"header_wrapper"},[s("div",{staticClass:"header_wrapper-item"},[s("inertia-link",{attrs:{href:t.route("index")}},[s("div",{staticClass:"header_wrapper-item_logo"},[s("img",{staticClass:"header_wrapper-item_logo-item",attrs:{src:"/images/header/main_logo.svg",alt:"Logo"}})])])],1),t._v(" "),s("div",{staticClass:"header_wrapper-item"},[s("ul",{staticClass:"header_wrapper-item_menu"},[s("li",{staticClass:"header_wrapper-item_menu-item"},[s("inertia-link",{staticClass:"header_wrapper-item_menu-item_link",attrs:{href:t.route("catalog")}},[t._v("Каталог")])],1),t._v(" "),s("li",{staticClass:"header_wrapper-item_menu-item"},[s("inertia-link",{staticClass:"header_wrapper-item_menu-item_link",attrs:{"preserve-scroll":"",href:t.route("information")}},[t._v("Информация")]),t._v(" "),t._m(0)],1),t._v(" "),s("li",{staticClass:"header_wrapper-item_menu-item"},[s("inertia-link",{staticClass:"header_wrapper-item_menu-item_link",attrs:{href:t.route("hits")}},[t._v("Хит - парад принтеров")])],1),t._v(" "),s("li",{staticClass:"header_wrapper-item_menu-item"},[s("inertia-link",{staticClass:"header_wrapper-item_menu-item_link",attrs:{href:t.route("blog")}},[t._v("Блог")])],1),t._v(" "),s("li",{staticClass:"header_wrapper-item_menu-item"},[s("inertia-link",{staticClass:"header_wrapper-item_menu-item_link",attrs:{href:t.route("about")}},[t._v("О нас")])],1),t._v(" "),s("li",{staticClass:"header_wrapper-item_menu-item"},[s("inertia-link",{staticClass:"header_wrapper-item_menu-item_link",attrs:{"preserve-scroll":"",href:t.route("contacts")}},[t._v("Контакты")])],1)])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"header_wrapper-item_menu-item-secondary"},[e("a",{staticClass:"header_wrapper-item_menu-item-secondary_item",attrs:{href:"/information#test"}},[e("li",[this._v("Test")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header_wrapper-item"},[e("div",{staticClass:"header_wrapper-item_contacts"},[e("img",{staticClass:"header_wrapper-item_contacts-icon",attrs:{src:"/images/header/header_tel.svg",alt:"Logo"}}),this._v(" "),e("a",{staticClass:"header_wrapper-item_contacts-tel",attrs:{href:"tel:88005556633"}},[this._v("8 800 555 66 33")])])])}],!1,null,null,null);e.a=r.exports},26:function(t,e,s){"use strict";var a=s(156),i=s(152),r={name:"Subscriptions"},n=s(1),o=Object(n.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"subscription"},[e("div",{staticClass:"subscription_wrapper"},[e("div",{staticClass:"subscription_wrapper-item"},[e("span",{staticClass:"subscription_wrapper-item_heading"},[this._v("Хотите быть в курсе новостей из мира картриджей?")])]),this._v(" "),e("form",{staticClass:"subscription_wrapper-item",attrs:{method:"POST"}},[e("input",{attrs:{type:"text",name:"email",placeholder:"Введите свою почту"}}),this._v(" "),e("button",{staticClass:"subscription_wrapper-item_button",attrs:{type:"submit"}},[e("span",[this._v("Отправить")])])])])])}],!1,null,null,null).exports,c={name:"Footer"},l=Object(n.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"footer_wrapper"},[s("div",{staticClass:"footer_wrapper-item"},[s("div",{staticClass:"footer_wrapper-item_logo"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"header_wrapper-item_logo-item",attrs:{src:"/images/header/main_logo.svg",alt:"Logo"}})])]),t._v(" "),s("div",{staticClass:"footer_wrapper-item_info"},[s("span",[t._v("Контактная информация")])]),t._v(" "),s("div",{staticClass:"footer_wrapper-item_tel"},[s("div",{staticClass:"footer_wrapper-item_tel-icon"},[s("img",{attrs:{src:"/images/header/contact.svg",alt:"Telephone"}})]),t._v(" "),s("a",{staticClass:"footer_wrapper-item_tel-phone",attrs:{href:"tel:8 800 555 33 22"}},[t._v("8 800 555 33 22")])]),t._v(" "),s("div",{staticClass:"footer_wrapper-item_adress"},[s("span",[t._v("149390 Россия, Москва, ул. Набережные челны, д. 123,"),s("br"),t._v(" корпус 56, строение 88, подъезд 6, офис 987")])]),t._v(" "),s("div",{staticClass:"footer_wrapper-item_social"},[s("div",{staticClass:"footer_wrapper-item_social_facebook"},[s("img",{attrs:{src:"/images/social/facebook.svg",alt:"Facebook"}})]),t._v(" "),s("div",{staticClass:"footer_wrapper-item_social_email"},[s("img",{attrs:{src:"/images/social/mail.svg",alt:"Email"}})]),t._v(" "),s("div",{staticClass:"footer_wrapper-item_social_instagram"},[s("img",{attrs:{src:"/images/social/instagram.svg",alt:"Instagramm"}})])])]),t._v(" "),s("div",{staticClass:"footer_wrapper-item"},[s("div",{staticClass:"footer_cat"},[s("div",{staticClass:"footer_cat-item"},[s("div",{staticClass:"footer_cat-item_heading"},[s("span",[t._v("Категории")]),t._v(" "),s("img",{staticClass:"footer_cat-item_heading-arrow",attrs:{src:"/images/icons/arrow_right.svg"}})])]),t._v(" "),s("div",{staticClass:"footer_cat-item"},[s("div",{staticClass:"footer_cat-item_list"},[s("ul",{staticClass:"footer_cat-item_list-ul"},[s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("О нас")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Блог")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Контакты")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Информация")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Хит парад принтеров")])])])]),t._v(" "),s("div",{staticClass:"footer_cat-item_list"},[s("ul",{staticClass:"footer_cat-item_list-ul"},[s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Каталог")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Лазерные принтеры")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Струйные принтеры")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Ч/Б принтеры")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Цветные принтеры")])])])])])])]),t._v(" "),s("div",{staticClass:"footer_wrapper-item"},[s("div",{staticClass:"footer_cat"},[s("div",{staticClass:"footer_cat-item"},[s("div",{staticClass:"footer_cat-item_heading"},[s("span",[t._v("Поддержка")]),t._v(" "),s("img",{staticClass:"footer_cat-item_heading-arrow",attrs:{src:"/images/icons/arrow_right.svg"}})])]),t._v(" "),s("div",{staticClass:"footer_cat-item"},[s("div",{staticClass:"footer_cat-item_list"},[s("ul",{staticClass:"footer_cat-item_list-ul"},[s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Личный кабинет")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Трекинг заказа")])]),t._v(" "),s("li",{staticClass:"footer_cat-item_list-ul_item"},[s("span",[t._v("Корзина")])])])])])])])])])}],!1,null,null,null).exports,m={name:"MainLayout",components:{Header:a.a,Menu:i.a,Subscriptions:o,Footer:l},mounted:function(){}},_=Object(n.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("Header"),this._v(" "),e("Menu"),this._v(" "),e("main",[this._t("default")],2),this._v(" "),e("Subscriptions"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=_.exports}}]);
