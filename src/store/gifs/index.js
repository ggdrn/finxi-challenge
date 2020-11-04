export const state = {
	gifs: [],

};
export const mutations = {
	ADD_GIFS(state,gifs){
		state.gifs = gifs
	}
}
export const actions = {
	getGifs({ dispatch }){
		console.log(dispatch) // debug
	}
}