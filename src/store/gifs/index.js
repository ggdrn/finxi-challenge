import { getGifsByOffset } from "../../services";

export const state = {
	gifs: [],
};
export const mutations = {
	ADD_GIFS(state, gifs) {
		gifs.forEach(gif => {
			state.gifs.push({
				id: gif.id,
				title: gif.title,
				rating: gif.rating,
				height: gif.images.original.height,
				width: gif.mages.original.width,
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
	async getGifs({ dispatch }, { query, offset }) {
		let gifs = await getGifsByOffset(query, offset)
		dispatch("ADD_GIFS", gifs)
	}
}