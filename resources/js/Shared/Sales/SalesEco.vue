<template>
    <div class="sales_eco">
        <div class="sales_eco-wrapper">

            <div class="sales_eco-wrapper_item">
                <div class="sales_eco-wrapper_item-head">
                    <p><span>Баннер</span>
                        Рассказывающий про программу  <span>эко</span>
                    </p>
                </div>
                <div class="sales_eco-wrapper_item-desc">
                </div>

                <div class="sales_eco-wrapper_item-btn">
                    <TextBtn text="подробнее" className="flat_btn eco_flat_btn" />
                </div>
            </div>


        </div>
    </div>

</template>

<script>
    import TextBtn from '@/Shared/Btns/TextBtn'

    export default {
        name: "SalesEco",
        components: {
            TextBtn
        }
    }
</script>

<style>

</style>
