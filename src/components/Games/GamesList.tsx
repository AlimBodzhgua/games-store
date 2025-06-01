import PropTypes from 'prop-types';
import type { Game } from '@/types/game';
import { GameItem } from './GameItem';
import classes from './games.module.css';
import { FC } from 'react';

interface GamesListProps {
	games: Game[];
}

export const GamesList: FC<GamesListProps> = (props) => {
	const { games } = props;

	return (
		<ul className={classes.games__list}>
			{games.map((game) => (
				<GameItem key={game.id} game={game} />
			))}
		</ul>
	);
}
