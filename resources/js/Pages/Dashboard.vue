<template>
    <Fragment>
        <Breadcrumbs />

        <div class="dash">
            <div class="dash_left">
                <div class="dash_left-wrap">
                    <div class="dash_left-wrap_item dash_active">
                        <span class="dash_left-wrap_item-text">
                            <span>Dashboard</span>
                        </span>
                        <div class="dash_left-wrap_item-icon"
                             style="background-image: url('/images/dash/dash_user.svg')"></div>
                    </div>

                    <div class="dash_left-wrap_item">
                        <span class="dash_left-wrap_item-text">
                            <span>Заказы</span>
                        </span>
                        <div class="dash_left-wrap_item-icon"
                             style="background-image: url('/images/dash/dash_orders.svg')"></div>
                    </div>

                    <div class="dash_left-wrap_item">
                        <span class="dash_left-wrap_item-text">
                            <span>Адреса</span>
                        </span>
                        <div class="dash_left-wrap_item-icon"
                             style="background-image: url('/images/dash/dash_addr.svg')"></div>
                    </div>

                    <div class="dash_left-wrap_item">
                        <span class="dash_left-wrap_item-text">
                            <span>Заполнить аккаунт</span>
                        </span>
                        <div class="dash_left-wrap_item-icon"
                             style="background-image: url('/images/dash/dash_fill.svg')"></div>
                    </div>

                    <div class="dash_left-wrap_item dash_logout" @click="logout">
                        <span class="dash_left-wrap_item-text">
                            <span>Выйти</span>
                        </span>
                    </div>

                </div>
            </div>

            <DashboardForms/>

        </div>
    </Fragment>
</template>

<script>
    import MainLayout from '@/Layouts/MainLayout'
    // import TextBtn from '@/Shared/Btns/TextBtn'
    import DashboardForms from '@/Shared/Dashboard/DashboardForms'
    import {Fragment} from 'vue-fragment'
    import Breadcrumbs from '@/Shared/Breadcrumbs/Breadcrumbs'

    export default {
        name: "Dashboard",
        layout: MainLayout,
        components: {
            DashboardForms,
            Fragment,
            Breadcrumbs
        },
        methods: {
            logout() {
                this.$inertia.post('logout');
            }
        }
    }
</script>
