import { useState, useEffect, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAction } from '@/hooks/useAction';
import { getFirstWord } from '@/utils/utils';
import { useAppSelector } from '@/hooks/redux';
import { selectUserData, selectUserLibrary } from '@/redux/selectors/userSelectors';
import { useHover } from '@/hooks/useHover';
import { Button } from '@/components/UI/Button/Button';
import { ScreenshotsList } from '@/components/GameScreenshots/ScreenshotsList';
import type { Game } from '@/types/game';
import defaultImage from '@/assets/default-image.jpg';
import classnames from 'classnames';

import { PlatformsIconList } from '../PlatformsIcon/PlatformsIconList';
import { GameItemGenresList } from '../GameItemGenresList/GameItemGenresList';
import classes from './GameItem.module.css';

interface GameItemProps {
	game: Game;
	className?: string;
}

export const GameItem: FC<GameItemProps> = (props) => {
	const { game, className  } = props;
	const [platformsIcon, setPlatformsIcon] = useState<string[]>([]);
	const { isHover, hoverProps } = useHover();;

	const { addGameAction, removeGameAction } = useAction();
	const userData = useAppSelector(selectUserData);
	const userLibarary = useAppSelector(selectUserLibrary);

	const navigate = useNavigate();
	const location = useLocation();

	const isInLibrary = (checkGame: Game) => {
		if (userData && userLibarary.length) {
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

	const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	}

	return (
		<li
			onClick={handleClick}
			className={classnames(classes.GamesItem, className)}
			{...hoverProps}
		>
			<img
				src={game.background_image ? game.background_image : defaultImage}
				className={classes.img}
			/>
			<div className={classes.info}>
				<div className={classes.platformsAndRating}>
					{platformsIcon.length > 0 && (
						<PlatformsIconList platformsIcon={platformsIcon} />
					)}
					{game.metacritic && (
						<div className={classes.metacritic}>{game.metacritic}</div>
					)}
				</div>
				<h3 className={classes.title}>{game.name}</h3>
				<div className={classes.date}>Released: {game.released}</div>

				{isHover && (
					<div className={classes.expandedInfo} onClick={onContentClick}>

						<div className={classes.genresWrapper}>
							<h3>Genres:</h3> 
							<GameItemGenresList genres={game.genres}/>
						</div>
						
						<ScreenshotsList
							screenshots={game.short_screenshots.slice(0, -1)}
							screenWidth='80px'
							screenHeight='50px'
						/>
						<Button
							size='sm'
							className={classes.detailsBtn}
						>
							Details
							<span>&gt;</span>
						</Button>
					</div>
				)}
			</div>
			{location.pathname === '/library' ? (
				<button className={classes.actionBtn} onClick={removeGame}>
					-
				</button>
			) : (
				<>
					{isInLibrary(game) ? (
						<button className={classes.actionBtn} disabled>
							&#x2714;
						</button>
					) : (
						<button className={classes.actionBtn} onClick={addGame}>
							+
						</button>
					)}
				</>
			)}
		</li>
	);
}