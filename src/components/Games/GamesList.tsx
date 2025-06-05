import type { Game } from '@/types/game';
import { GameItem } from './GameItem';
import classes from './games.module.css';
import { FC } from 'react';
import { Skeleton } from '../UI/Skeleton/Skeleton';
import ErrorIcon from '@/assets/icons/error.svg';
import classnames from 'classnames';
import { Button } from '../UI/Button/Button';
import { GamesListSkeleton } from './GamesListSkeleton';

interface GamesListProps {
	games: Game[];
	isLoading: boolean;
	error: string | null;
	className?: string;
}

export const GamesList: FC<GamesListProps> = (props) => {
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
				<ErrorIcon className={classes.icon}/>
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
}
