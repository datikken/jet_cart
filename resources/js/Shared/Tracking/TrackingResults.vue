<template>
    <Fragment>
    <div class="trackp">
        <div class="trackp_progress"></div>

        <div class="trackp_item">
            <div class="trackp_item_head">
                <span>Товар на складе</span>
            </div>
            <div class="trackp_item_footer">
                <span>Адрес и телефон склада где находится товар</span>
            </div>
        </div>

        <div class="trackp_item">
            <div class="trackp_item_head">
                <span>Передан в службу доставки</span>
            </div>
            <div class="trackp_item_footer">
                <span>Адрес и телефон службы доставки где находится товар</span>
            </div>
        </div>

        <div class="trackp_item">
            <div class="trackp_item_head">
                <span>Отправлен с курьером</span>
            </div>
            <div class="trackp_item_footer">
                <span>Адрес и телефон курьера, которой осуществляет доставку</span>
            </div>
        </div>

        <div class="trackp_item">
            <div class="trackp_item_head">
                <span>Доставлен</span>
            </div>
            <div class="trackp_item_footer">
            </div>
        </div>
    </div>

    <div class="trackfeed">
        <div class="trackfeed_wrap">
            <div class="trackfeed_head">
                <span>Мы любим, когда товар доставлен надлежащего качества и в назначенный срок. Поэтому, мы будем рады вашему отклику относительно доставки.</span>
            </div>

            <label for="trackfeed" class="trackfeed_themeLabel">Выберите тему обращения</label>

            <div class="trackfeed_theme">
                <input type="text" class="invisible" name="feed_theme" value="Пожелания">

                <div class="trackfeed_feedItem feedActive">
                    <span>Пожелания</span>
                </div>
                <div class="trackfeed_feedItem">
                    <span>Вопрос</span>
                </div>
                <div class="trackfeed_feedItem">
                    <span>Претензия</span>
                </div>
            </div>

            <form class="trackfeed_content" action="" method="get">
                <label for="trackfeed" class="trackfeed_label">Оставить отзыв о заказе</label>
                <textarea name="" id="" class="trackfeed_textarea" cols="30" rows="10"></textarea>
            </form>

            <TextBtn className="tracking_submit action_btn" text="Отправить" />

        </div>
    </div>
    </Fragment>
</template>

<script>
    import TextBtn from '@/Shared/Btns/TextBtn'
    import {Fragment} from 'vue-fragment';

    export default {
        name: "TrackingResults",
        components: {
            TextBtn,
            Fragment
        }
    }
</script>

<style scoped>

</style>
