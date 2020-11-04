export const state = {
	savedGifs: [],

};
export const mutations = {
	ADD_SAVEDGIFS(state, gif) {
		state.savedGifs.push(gif)
	},
	EDIT_SAVEGIFS(state, gif) {
		state.savedGifs.forEach(g => {
			if (g.id == gif.id)
				return g = gif
		})
	},
	DELETE_SAVEDGIFS(state, gif) {
		state.savedGifs.forEach((g, index) => {
			if (g.id == gif.id)
				return state.savedGifs.splice(index, 1);
		})

	}
}
export const actions = {}