<template>
    <Fragment>
        <Breadcrumbs />

        <div class="catalog">
            <div class="columns catalog_columns">

                <div class="mobile-hide">
                    <LeftColumn />
                </div>

                <div class="right_column">

                    <div class="desktop-hide">
                        <MobileFilters />
                    </div>

                    <CatalogSwitch />

                    <NothingFound v-if="products.length === 0" />

                    <Loader v-if="products.length === 0" />

                    <div class="products_grid">
                        <div v-if="products.length > 1">
                            <vue-ads-pagination
                                :total-items="products.length"
                                :max-visible-pages="5"
                                :page="page"
                                :items-per-page="this.catalogPerPage"
                                :loading="loading"
                                @page-change="pageChange"
                            >

                                <template slot-scope="props">

                                    <CatalogCard
                                        v-if="!gridCatalog"
                                        :data="item"
                                        v-for="item in products.slice(props.start, props.end)"
                                        :key="item.name"/>

                                    <CatalogCardList
                                        v-if="gridCatalog"
                                        :data="item"
                                        v-for="item in products.slice(props.start, props.end)"
                                        :key="item.name"/>

                                </template>

                                <template
                                    slot="buttons"
                                    slot-scope="props"
                                    :class="testPagi"
                                >

                                    <div class="load_more-btn " @click="loadMore">
                                        <TextBtn text="загрузить еще" className="yellow_btn animated_btn"/>
                                    </div>

                                    <vue-ads-page-button
                                        v-for="(button, key) in props.buttons"
                                        :key="key"
                                        v-bind="button"
                                        @page-change="page = button.page"
                                    />
                                </template>
                            </vue-ads-pagination>
                        </div>

                        <div v-else class="products_wrapper">
                            <CatalogCard :data="item" v-for="item in products"
                                         :key="item.name"/>
                        </div>

                     <Modal />

                    </div>
                </div>
            </div>

            <OrdersHistory  />

        </div>


    </Fragment>
</template>

<script>
    import Fizik from '@/Shared/Customer/Fizik'
    import Urik from '@/Shared/Customer/Urik'
    import Loader from '@/Shared/Loader/Loader'
    import OrderList from '@/Shared/Orders/OrdersList'
    import {mapGetters, mapActions} from 'vuex'
    import MainLayout from '@/Layouts/MainLayout'
    import Breadcrumbs from '@/Shared/Breadcrumbs/Breadcrumbs'
    import OrdersHistory from '@/Shared/Orders/OrdersHistory'
    import CatalogCard from '@/Shared/Catalog/CatalogCard'
    import CatalogCardList from '@/Shared/Catalog/CatalogCardList'
    import CatalogSwitch from '@/Shared/Catalog/CatalogSwitch'
    import NothingFound from '@/Shared/Errors/NothingFound'
    import MobileFilters from '@/Shared/Filters/MobileFilters'
    import LeftColumn from '@/Shared/Layout/LeftColumn'
    import {Fragment} from 'vue-fragment'
    import Modal from '@/Shared/Modal/Modal'
    import TextBtn from '@/Shared/Btns/TextBtn'
    import VueAdsPagination, {VueAdsPageButton} from 'vue-ads-pagination';

    export default {
        name: "Checkout",
        data: function () {
            return {
                userFace: null,
                loading: false,
                products: false,
                page: 0
            }
        },
        layout: MainLayout,
        components: {
            Fizik,
            Urik,
            Loader,
            OrderList,
            Breadcrumbs,
            OrdersHistory,
            CatalogCard,
            CatalogCardList,
            Fragment,
            CatalogSwitch,
            NothingFound,
            MobileFilters,
            LeftColumn,
            VueAdsPagination,
            VueAdsPageButton,
            TextBtn,
            Modal
        },
        computed: {
            ...mapGetters([
                'orders',
                'gridCatalog',
                'catalogPerPage'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_ALL_PRODUCTS',
                'CATALOG_LOAD_MORE',
                'SEND_GOOGLE_ANALYTICS'
            ]),
            pageChange(page) {
                this.page = page;
            },
            loadMore(e) {
                this.CATALOG_LOAD_MORE();
            }
        },
        mounted() {
            this.userFace = this.$page.user ? this.$page.user.face : 'fizik';
            this.products = this.$page.products;
        }
    }
</script>
