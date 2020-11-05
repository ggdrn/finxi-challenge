import axios from "axios";

export const api = axios.create({
	baseURL: `https://api.giphy.com/v1/gifs/`
});

const onError = ({ message, stack }) => {
	console.error({ message, stack });
	return { data: false };
};

api.interceptors.response.use(({ data }) => data, onError);
export default api;