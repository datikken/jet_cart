import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/state';
import getters from './getters/getters';
import actions from './actions/actions';
import mutations from './mutations/mutations'
import createPersistedState from "vuex-persistedstate";

window.token = document.querySelector('meta[name="csrf-token"]').content;

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [createPersistedState()]
})

export default store
