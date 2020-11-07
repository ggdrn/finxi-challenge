import { getGifsByOffset } from "../../services";

export const state = {
	gifs: [],
	totalCount: 0
};
export const mutations = {
	ADD_GIFS(state, { gifs, pagination }) {
		state.totalCount = pagination.total_count
		gifs.forEach(gif => {
			state.gifs.push({
				id: gif.id,
				title: gif.title,
				rating: gif.rating,
				height: gif.images.original.height,
				width: gif.images.original.width,
				url: gif.images.original.url,
				username: gif.username,
				importDateTime: gif.import_datetime,
				saved: false,
			})
		})
	},
	CLEAR_GIFS(state) {
		state.gifs = []
	},
	EDIT_GIF(state, gif) {
		state.gifs = state.gifs.map(g => {
			if (g.id == gif.id)
				g = gif
			return g
		})
	},
}
export const actions = {
	editGif({ commit }, gif) {
		commit("EDIT_GIF", gif)
	},
	async getGifs({ commit }, { query, offset }) {
		let { gifs, pagination } = await getGifsByOffset(query, offset)
		commit("ADD_GIFS", { gifs, pagination })
	},
	clearGifs({ commit }) {
		commit("CLEAR_GIFS")
	}
}