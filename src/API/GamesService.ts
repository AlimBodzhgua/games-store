import axios from 'axios';
import type { Game, GameDetails } from '@/types/game';
import { transformGamesResponseData } from '@/utils/utils';

const key = '3cfb0003af6a422ab1e4230e1a8c4b39'

export class GamesService {
	static async getGames(page: number, genreName?: string): Promise<Game[]> {
		let params = {
			key: '3cfb0003af6a422ab1e4230e1a8c4b39',
			page_size: 25,
			page: page,
			genres: genreName,
		}

		const response = await axios.get(`https://api.rawg.io/api/games`, { params });
		const games = transformGamesResponseData(response.data.results) as Game[];
		return games;
	}

	static async searchGame(search: string) {
		const response = await axios.get(`https://api.rawg.io/api/games?key=3cfb0003af6a422ab1e4230e1a8c4b39&page_size=25&search_exact=true&search=${search}&ordering=-metacritic`);
		return response.data;
	}

	static async getGameDetails(id: number): Promise<GameDetails> {
		const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=3cfb0003af6a422ab1e4230e1a8c4b39&page=1&page_size=25`);
		const game = transformGamesResponseData(response.data) as GameDetails;
		return game;
	}

	static async getGameScreenshots(id: number) {
		const response = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=3cfb0003af6a422ab1e4230e1a8c4b39`);
		return response.data;
	}

	static async getGenres() {
		const response = await axios.get('https://api.rawg.io/api/genres?key=3cfb0003af6a422ab1e4230e1a8c4b39');
		return response.data;
	}

}