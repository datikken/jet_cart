<template>
    <span @click="resend">Resend</span>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'

    export default {
        name: "EmailVerify",
        layout: MainLayout,
        mounted() {
            console.log('verify', this.$page);
        },
        data() {
            return {
                routes: route('verification.send'),
                form: this.$inertia.form({})
            }
        },
        methods: {
            resend() {
                this.$inertia.post(this.routes, this.form)
            }
        }
    }
</script>
