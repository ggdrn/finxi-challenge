import { getGifsByOffset } from "./services";

export const state = {
	gifs: [],
};
export const mutations = {
	ADD_GIFS(state, gifs) {
		state.gifs.push(gifs)
	},
	CLEAR_GIFS(state) {
		state.gifs = []
	}
}
export const actions = {
	async getGifs({ dispatch }, { query, offset }) {
		let gifs = await getGifsByOffset(query, offset)
		dispatch("ADD_GIFS", gifs)
	}
}