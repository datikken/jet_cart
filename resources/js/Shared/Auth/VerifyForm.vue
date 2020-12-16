<template>

    <div class="verify">
        <div class="verify_wrap">
            <div class="verify_wrap_icon"></div>

            <span class="verify_wrap_head">Подтверждение почты.</span>

            <span class="verify_wrap_text">Для входа в личный кабинет необходимо подтвердить указанную почту</span>

            <a class="verify_wrap_link" href="">
                <TextBtn text="Не получили письмо?" className="flat_btn action_btn" />
            </a>

            <a class="verify_wrap_link" href="{{ route('mainPage') }}">
                <TextBtn text="Закрыть" className="flat_btn action_btn animated_btn" />
            </a>

        </div>
    </div>

</template>

<script>
    import TextBtn from '@/Shared/Btns/TextBtn';

    export default {
        name: "VerifyForm",
        components: {
            TextBtn
        }
    }
</script>

<style scoped>

</style>
