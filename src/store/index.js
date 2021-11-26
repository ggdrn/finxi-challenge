import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// import modules of stores
import * as gifs from "./gifs";
import * as savedGifs from "./saved-gifs";
import * as user from "./user";

export default new Vuex.Store({
	modules: {
		gifs: {
			namespaced: true,
			...gifs,
		}, user: {
			namespaced: true,
			...user,
		},
		savedGifs: {
			namespaced: true,
			...savedGifs,
		},
	}
})