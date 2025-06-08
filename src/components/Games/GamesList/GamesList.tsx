import { FC, memo } from 'react';
import { Button } from '@/components/UI/Button/Button';
import type { Game } from '@/types/game';
import ErrorIcon from '@/assets/icons/error.svg';
import classnames from 'classnames';

import { GamesListSkeleton } from './GamesListSkeleton';
import classes from './GameList.module.css';

import { GameItem } from '../GameItem/GameItem';

interface GamesListProps {
	games: Game[];
	isLoading: boolean;
	error: string | null;
	className?: string;
}

export const GamesList: FC<GamesListProps> = memo((props) => {
	const {
		games,
		isLoading,
		error,
		className,
	} = props;

	const onReload = () => location.reload();

	if (error) {
		return (
			<div className={classes.error}>
				<ErrorIcon className={classes.errorIcon}/>
				<h1 className={classes.errorTitle}>500</h1>
				<h1 className={classes.errorTitle}>Oops! Internal Server Error</h1>
				<h3 className={classes.errorSubtitle}>Error fetching data, reload the page or try it later</h3>
				<Button theme='white' onClick={onReload}>reload</Button>
			</div>
		)
	}

	if (isLoading) {
		return <GamesListSkeleton />
	}

	return (
		<ul className={classnames(classes.GamesList, className)}>
			{games.map((game) => (
				<GameItem key={game.id} game={game} />
			))}
		</ul>
	);
});
