(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{241:function(t,e,n){"use strict";n.r(e);var i={name:"EmailVerify",layout:n(26).a,mounted:function(){console.log("verify",this.$page)},data:function(){return{routes:route("verification.send"),form:this.$inertia.form({})}},methods:{resend:function(){this.$inertia.post(this.routes,this.form)}}},s=n(1),o=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("span",{on:{click:this.resend}},[this._v("Resend")])}),[],!1,null,null,null);e.default=o.exports}}]);