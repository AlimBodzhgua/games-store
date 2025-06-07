import { useState, useEffect, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAction } from '@/hooks/useAction';
import { getFirstWord } from '@/utils/utils';
import { useAppSelector } from '@/hooks/redux';
import { selectUserData } from '@/redux/selectors/userSelectors';
import type { Game } from '@/types/game';
import defaultImage from '@/assets/default-image.jpg';
import classnames from 'classnames';

import { PlatformsIconList } from './PlatformsIcon/PlatformsIconList';
import classes from './games.module.css';

interface GameItemProps {
	game: Game;
	className?: string;
}

export const GameItem: FC<GameItemProps> = (props) => {
	const { game, className  } = props;
	const [platformsIcon, setPlatformsIcon] = useState<string[]>([]);
	const { addGameAction, removeGameAction } = useAction();
	const userData = useAppSelector(selectUserData);

	const navigate = useNavigate();
	const location = useLocation();

	const isInLibrary = (checkGame: Game) => {
		if (userData) {
			let inLibrary = false;
			userData.library.forEach((game) => {
				if (game.id === checkGame.id) {
					inLibrary = true;
				}
			});
			return inLibrary;
		}
	};

	useEffect(() => {
		if (game.platforms) {
			const platforms = new Set();
			game.platforms.forEach((platform) => {
				const name = getFirstWord(platform.name);
				platforms.add(name);
			});
			setPlatformsIcon([...platforms] as string[]);
		}
	}, []);

	const handleClick = () => {
		navigate('/game/' + game.id);
	};

	const addGame = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		if (!userData) {
			return alert('You should register or login in account');
		}
		addGameAction(game);
	};

	const removeGame = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		removeGameAction(game.id);
	}

	return (
		<li onClick={handleClick} className={classnames(classes.GamesItem, className)}>
			<img
				src={game.background_image ? game.background_image : defaultImage}
				className={classes.logo}
			/>
			<div className={classes.info}>
				{platformsIcon.length > 0 && (
					<PlatformsIconList platformsIcon={platformsIcon} />
				)}
				<h3 className={classes.title}>{game.name}</h3>
				<div className={classes.date}>Released: {game.released}</div>
				{game.metacritic && (
					<div className={classes.metacritic}>{game.metacritic}</div>
				)}
			</div>
			{location.pathname === '/library' ? (
				<button className={classes.add} onClick={removeGame}>
					-
				</button>
			) : (
				<>
					{isInLibrary(game) ? (
						<button className={classes.add} disabled>
							&#x2714;
						</button>
					) : (
						<button className={classes.add} onClick={addGame}>
							+
						</button>
					)}
				</>
			)}
		</li>
	);
}