import { Genre } from '@/types/game';
import action from '@/assets/genres/action.jpg';
import adventure from '@/assets/genres/adventure.jpg';
import arcade from '@/assets/genres/arcade.jpg';
import card from '@/assets/genres/card.webp';
import casual from '@/assets/genres/casual.jpg';
import educational from '@/assets/genres/educational.jpg';
import family from '@/assets/genres/family.jpg';
import fighting from '@/assets/genres/fighting.jpg';
import indie from '@/assets/genres/indie.jpg';
import multiplayer from '@/assets/genres/multiplayer.jpg';
import platformer from '@/assets/genres/platformer.png';
import puzzle from '@/assets/genres/puzzle.png';
import racing from '@/assets/genres/racing.jpg';
import rpg from '@/assets/genres/rpg.webp';
import shooter from '@/assets/genres/shooter.jpg';
import simulation from '@/assets/genres/simulation.webp';
import sports from '@/assets/genres/sports.jpeg';
import strategy from '@/assets/genres/strategy.png';

export const genres: Genre[] = [
	{ id: 4, name: 'Action', img: action },
	{ id: 51, name: 'Indie', img: indie },
	{ id: 3, name: 'Adventure', img: adventure },
	{ id: 5, name: 'RPG', img: rpg },
	{ id: 10, name: 'Strategy', img: strategy },
	{ id: 2, name: 'Shooter', img: shooter },
	{ id: 40, name: 'Casual', img: casual },
	{ id: 14, name: 'Simulation', img: simulation },
	{ id: 7, name: 'Puzzle', img: puzzle },
	{ id: 11, name: 'Arcade', img: arcade },
	{ id: 83, name: 'Platformer', img: platformer },
	{ id: 59, name: 'Massively Multiplayer', img: multiplayer },
	{ id: 1, name: 'Racing', img: racing },
	{ id: 15, name: 'Sports', img: sports },
	{ id: 6, name: 'Fighting', img: fighting },
	{ id: 19, name: 'Family', img: family },
	{ id: 17, name: 'Card', img: card },
	{ id: 34, name: 'Educational', img: educational },
];
