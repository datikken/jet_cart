<template>

    <div class="main">

        <LoginForm />

        <div class="auth-decor"></div>

        <div class="auth-pick">
            <span class="auth-pick_item">или</span>
        </div>

        <RegisterForm />

    </div>

</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'
    import LoginForm from '@/Shared/Auth/LoginForm'
    import RegisterForm from '@/Shared/Auth/RegisterForm'

    export default {
        name: "Login",
        layout: MainLayout,
        components: {
            RegisterForm,
            LoginForm
        },
        mounted() {
        }
    }
</script>
