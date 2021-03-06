import { api } from "../utils/giphy-instance";
import { apiKeyGiphy } from "../utils";

export const getGifsByOffset = async (query, offset) => {
	let { data, pagination } = await api.get(`search?api_key=${apiKeyGiphy}&q=${query}&limit=18&offset=${offset}&lang=pt`)
	return { gifs: data, pagination };
}
export const editSavedGifs = async (gif) => {
	console.log(gif) // debug
	// add here the end-point of the api that edits the saved gif.
	return { success: "Gif editada com sucesso" }
}
export const deleteSavedGifs = async (gif) => {
	console.log(gif) // debug
	// add here the end-point of the api that deletes the saved gif.
	return { success: "Gif deletada com sucesso" }
}
export const addSavedGifs = async (gif) => {
	console.log(gif) // debug
	// add here the end-point of the api that save the saved gif.
	return { success: "Gif adicionada com sucesso" }
}
