require('./bootstrap');
require('moment');
require('./ExternalLibs/owl.carousel.min');

import Vue from 'vue';
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue';

import VueTruncate from 'vue-truncate-filter';
import {InertiaApp} from '@inertiajs/inertia-vue';
import {InertiaForm} from 'laravel-jetstream';
import store from './Store/store';
import Fragment from 'vue-fragment'

const app = document.getElementById('app');

new Vue({
    metaInfo: {
        titleTemplate: (title) => 'Recart.me'
    },
    store,
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent:name => import(`@/Pages/${name}`).then(module => module.default)
            }
        })
}).$mount(app);

Vue.use(VueTruncate)
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);
Vue.use(Fragment.Plugin)
Vue.use(VueMeta)

Vue.mixin({methods: {route}});
