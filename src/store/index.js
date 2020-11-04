import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// import modules of stores
import * as gifs from "./gifs";
import * as savedGifs from "./saved-gifs";

export default new Vuex.Store({
	modules: {
		gifs: {
			namespaced: true,
			...gifs,
		},
		savedGifs: {
			namespaced: true,
			...savedGifs,
		},
	}
})