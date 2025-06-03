import axios from 'axios';
import type { Game, GameDetails } from '@/types/game';
import { transformGamesResponseData } from '@/utils/utils';
import { gamesApi } from '@/API/axios';

export class GamesService {
	static async getGames(page: number, genreName?: string): Promise<Game[]> {
		const params = {
			page_size: 25,
			page: page,
			genres: genreName,
		}

		const response = await gamesApi.get('games', { params });
		const games = transformGamesResponseData(response.data.results) as Game[];
		return games;
	}

	static async searchGame(search: string) {
		const response = await axios.get(`/games?search_exact=true&search=${search}&ordering=-metacritic`);
		return response.data;
	}

	static async getGameDetails(id: number): Promise<GameDetails> {
		const response = await gamesApi.get(`games/${id}`);
		const game = transformGamesResponseData(response.data) as GameDetails;
		return game;
	}

	static async getGameScreenshots(id: number) {
		const response = await gamesApi.get(`games/${id}/screenshots`);
		return response.data;
	}

	static async getGenres() {
		const response = await gamesApi.get('genres');
		return response.data;
	}

}