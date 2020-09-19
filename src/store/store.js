import Vue from 'vue';
import Vuex from 'vuex';

import {
    alert
} from './alert.module';
import user_auth from './user_auth';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        alert,
        user_auth
    }
});

export default store;