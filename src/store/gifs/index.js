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
			})
		})
	},
	CLEAR_GIFS(state) {
		state.gifs = []
	}
}
export const actions = {
	async getGifs({ commit }, { query, offset }) {
		let { gifs, pagination } = await getGifsByOffset(query, offset)
		commit("ADD_GIFS", { gifs, pagination })
	},
	clearGifs({ commit }) {
		commit("CLEAR_GIFS")
	}
}