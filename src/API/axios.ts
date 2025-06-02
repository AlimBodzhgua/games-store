import axios from 'axios';

const baseHeaders = {
	'Content-Type': 'application/json',
};

export const baseApi = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: baseHeaders,
})

export const gamesApi = axios.create({
	baseURL: import.meta.env.VITE_GAMES_URL,
	headers: baseHeaders,
	params: {
		key: import.meta.env.VITE_GAMES_API_KEY
	}
});
