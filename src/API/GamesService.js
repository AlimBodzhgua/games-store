import axios from 'axios';

const key = '3cfb0003af6a422ab1e4230e1a8c4b39'

export default class GamesService {
	static async getGames(page, genre) {
		let params = {
			key: '3cfb0003af6a422ab1e4230e1a8c4b39',
			page_size: 25,
			page: page,
			genres: genre,
		}
		if (genre) {
			params.genres = genre;
		}
		const response = await axios.get(`https://api.rawg.io/api/games`, {params});
		return response.data;
	}

	static async getGameDetails(id) {
		const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=3cfb0003af6a422ab1e4230e1a8c4b39&page=1&page_size=25`);
		return response.data;
	}

	static async getGameScreenshots(id) {
		const response = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=3cfb0003af6a422ab1e4230e1a8c4b39`);
		return response.data;
	}

	static async getGenres() {
		const response = await axios.get('https://api.rawg.io/api/genres?key=3cfb0003af6a422ab1e4230e1a8c4b39');
		return response.data;
	}

	static async getPlatforms() {
		const response = await axios.get('https://api.rawg.io/api/creators?key=3cfb0003af6a422ab1e4230e1a8c4b39');
		return response.data;
	}
}