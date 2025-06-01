import { useState, useEffect, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAction } from '@/hooks/useAction';
import { getFirstWord } from '@/utils/utils';
import { useAppSelector } from '@/hooks/redux';
import { PlatformsIconList } from './PlatformsIcon/PlatformsIconList';
import defaultImage from '@/assets/default-image.jpg';
import type { Game } from '@/types/game';

import classes from './games.module.css';

interface GameItemProps {
	game: Game;
}

export const GameItem: FC<GameItemProps> = (props) => {
	const { game } = props;
	const [platformsIcon, setPlatformsIcon] = useState<string[]>([]);
	const { addGameAction, removeGameAction } = useAction();
	const { isAuth, data } = useAppSelector((state) => state.user);

	const navigate = useNavigate();
	const location = useLocation();

	const isInLibrary = (checkGame: Game) => {
		if (isAuth && data) {
			let inLibrary = false;
			data.library.forEach((game) => {
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
		if (!isAuth) {
			return alert('You should register or login in account');
		}
	
		addGameAction(game);
	};

	const removeGame = () => removeGameAction(game.id);

	return (
		<li onClick={handleClick} className={classes.item}>
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
			{location.pathname === '/' && (
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
			{location.pathname === '/library' && (
				<button className={classes.add} onClick={removeGame}>
					-
				</button>
			)}
		</li>
	);
}