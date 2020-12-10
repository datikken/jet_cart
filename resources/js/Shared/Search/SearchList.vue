<template>
    <div class="sres as-none" v-bind:class="{ 'as-none': searchClosed }">

        <Loader />

        <div class="sres_wrap">
            <div class="sres_close" @click="toggleSearch"></div>

            <simplebar data-simplebar-auto-hide="true" class="sres_content">

                <SearchListItemHead  v-if="items[0] && items[0].length > 0" type="Принтер струйный" />

                <div v-for="item in items[0]" :key="item.id">
                    <SearchListItem :data="item" />
                </div>

                <SearchListItemHead  v-if="items[1] && items[1].length > 0" type="Принтер лазерный" />

                <div v-for="item in items[1]" :key="item.id">
                    <SearchListItem :data="item" />
                </div>

                <SearchListItemHead v-if="items[2] && items[2].length > 0" type="Принтер матричный" />

                <div v-if="items[2] && items[2].length > 0" v-for="item in items[2]" :key="item.id">
                    <SearchListItem :data="item" />
                </div>

            </simplebar>
        </div>
    </div>
</template>

<script>
    import SearchListItem from "./SearchListItem";
    import SearchListItemHead from "./SearchListItemHead";
    import Loader from "@/Shared/Loader/Loader";
    import simplebar from 'simplebar-vue';

    export default {
        name: "SearchList",
        data: () => ({
            searchClosed: null
        }),
        components: {
            SearchListItem,
            SearchListItemHead,
            simplebar,
            Loader
        },
        created: function() {
            document.addEventListener('click', (e) => {
                if(e.currentTarget != 'sres' && !this.searchClosed) {
                    this.searchClosed = true;
                } else {
                    this.searchClosed = false;
                }
            })
        },
        methods: {
            toggleSearch() {
                this.searchClosed = !this.searchClosed;
            }
        },
        computed: {
            items() {
                let sres = document.querySelector('.sres');
                let products = this.$store.getters.searchProducts;

                    products.forEach(prd => {
                    if(prd.length > 0) {
                            sres && sres.classList.remove('as-none');
                    }
                })

                return this.$store.getters.searchProducts;
            }
        }
    }
</script>
