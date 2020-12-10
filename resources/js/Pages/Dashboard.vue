<template>
    <Fragment>
        <Breadcrumbs />

        <div class="dash">
            <div class="dash_left">
                <div class="dash_left-wrap">
                    <div class="dash_left-wrap_item dash_active">
                        <a class="dash_left-wrap_item-text">
                            <span>Dashboard</span>
                        </a>
                        <div class="dash_left-wrap_item-icon"
                             style="background-image: url('/images/dash/dash_user.svg')"></div>
                    </div>

                    <div class="dash_left-wrap_item">
                        <a class="dash_left-wrap_item-text">
                            <span>Заказы</span>
                        </a>
                        <div class="dash_left-wrap_item-icon"
                             style="background-image: url('/images/dash/dash_orders.svg')"></div>
                    </div>

                    <div class="dash_left-wrap_item">
                        <a class="dash_left-wrap_item-text">
                            <span>Адреса</span>
                        </a>
                        <div class="dash_left-wrap_item-icon"
                             style="background-image: url('/images/dash/dash_addr.svg')"></div>
                    </div>

                    <div class="dash_left-wrap_item">
                        <a class="dash_left-wrap_item-text">
                            <span>Заполнить аккаунт</span>
                        </a>
                        <div class="dash_left-wrap_item-icon"
                             style="background-image: url('/images/dash/dash_fill.svg')"></div>
                    </div>

                    <div class="dash_left-wrap_item dash_logout">
                        <a class="dash_left-wrap_item-text">
                            <span>Выйти</span>
                        </a>
                    </div>

                </div>
            </div>

            <DashboardForms/>

        </div>
    </Fragment>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'
    import TextBtn from '@/Shared/Btns/TextBtn'
    import DashboardForms from '@/Shared/Dashboard/DashboardForms'
    import {Fragment} from 'vue-fragment'
    import Breadcrumbs from '@/Shared/Breadcrumbs/Breadcrumbs'

    export default {
        name: "Dashboard",
        layout: MainLayout,
        components: {
            TextBtn,
            DashboardForms,
            Fragment,
            Breadcrumbs
        }
    }
</script>
