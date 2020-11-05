import { editSavedGifs, deleteSavedGifs, addSavedGifs } from "./services";

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
export const actions = {
	async editSavedGifs({ commit }, gif) {
		// save gif in database
		let { success, error } = await editSavedGifs(gif);
		if (success) {
			// commit saved gif in state
			commit("EDIT_SAVEGIFS", gif)
			return success
		} else {
			return error
		}
	},
	async addSavedGifs({ commit }, gif) {
		// added gif in database
		let { success, error } = await addSavedGifs(gif);
		if (success) {
			// commit saved gif in state
			commit("ADD_SAVEDGIFS", gif)
			return success
		} else {
			return error
		}
	},
	async deleteSavedGifs({ commit }, gif) {
		// save gif in database
		let { success, error } = await deleteSavedGifs(gif);
		if (success) {
			// remove saved gif in state
			commit("DELETE_SAVEDGIFS", gif)
			return success
		} else {
			return error
		}
	}

}