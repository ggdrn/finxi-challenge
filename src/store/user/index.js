import { createUser, loginUser } from '@/services/index.js'
import Vue from 'vue';
import VueCookies from 'vue-cookies';

// Registro de Cookies
Vue.use(VueCookies);

export const state = {
    user: Vue.$cookies.get('user') != undefined ? Vue.$cookies.get('user') : {},
};
export const mutations = {
    SAVE_USER (state, user) {
        state.user = { id: user.uid };
        Vue.$cookies.set('user', { id: user.uid });
        Vue.set(state.user, 'user', { id: user.uid });
    }
}

export const actions = {
    async saveUser (_, { email, password }) {
        let { user, error } = await createUser(email, password);
        if (user) {
            return { success: true }
        } else {
            return { error }
        }
    },
    async getUser ({ commit }, { email, password }) {
        let { user, error } = await loginUser(email, password);
        if (user) {
            await commit('SAVE_USER', user);
            return { success: true }
        } else {
            return { error }
        }
    },
}