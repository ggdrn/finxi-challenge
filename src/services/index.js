import { api } from "../utils/giphy-instance";
import { apiKeyGiphy } from "../utils";
import { authLogin, db } from "./firebase";
import store from '@/store';

const userId = () => {
	return store.state.user.user.id;
}


export const getGifsByOffset = async (query, offset) => {
	let { data, pagination } = await api.get(`search?api_key=${apiKeyGiphy}&q=${query}&limit=18&offset=${offset}&lang=pt`)
	return { gifs: data, pagination };
}
export const editSavedGifs = async (gif) => {
	const id = userId();
	await db
		.collection('saved_gifs')
		.doc(id)
		.collection("gifs")
		.doc(gif.id)
		.set(gif, { merge: true });
	return { success: "Gif adicionada com sucesso" }
}
export const deleteSavedGifs = async (gif) => {
	const id = userId();
	await db
		.collection('saved_gifs')
		.doc(id)
		.collection("gifs")
		.doc(gif.id)
		.delete();

	// add here the end-point of the api that deletes the saved gif.
	return { success: "Gif deletada com sucesso" }
}
export const addSavedGifs = async (gif) => {
	const id = userId();
	await db
		.collection('saved_gifs')
		.doc(id)
		.collection("gifs")
		.doc(gif.id)
		.set(gif, { merge: true });
	return { success: "Gif adicionada com sucesso" }
}

export const getSavedGifs = async () => {
	const id = userId();
	const savedGifs = await db
		.collection('saved_gifs')
		.doc(id)
		.collection("gifs")
		.get();

	let array = [];

	for await (let doc of savedGifs.docs) {
		array.push(doc.data());
	}
	// add here the end-point of the api that save the saved gif.
	return array
}

export const createUser = async (email, password) => {
	const { user, error } = await authLogin.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// Signed in
			return { user: userCredential.user }
		})
		.catch((error) => {
			return { error: error.message }
			// ..
		});
	if (user) {
		return { user }
	} else {
		return { error };
	}
}

export const loginUser = async (email, password) => {
	const { user, error } = await authLogin.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// Signed in
			return { user: userCredential.user }
		})
		.catch((error) => {
			return { error: error.message }
			// ..
		});
	if (user) {
		console.log(user)
		return { user }
	} else {
		return { error };
	}
}