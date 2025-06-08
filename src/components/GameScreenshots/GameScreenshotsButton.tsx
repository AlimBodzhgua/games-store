import { FC, useState } from 'react';
import { useFetching } from '@/hooks/useFetching';
import { GamesService } from '@/services/GamesService';
import { ScreenshotsList } from './ScreenshotsList';

import classes from './screenshots.module.css';
import { Button } from '../UI/Button/Button';

interface GameScreenshotsProps {
	id: number;
}

export const GameScreenshotsButton: FC<GameScreenshotsProps> = ({ id }) => {
	const [showScreenshots, setShowScreenshots] = useState(false);
	const [screenshots, setScreenshots] = useState([]);
	const { fetching: fetchScreenshots } = useFetching(async () => {
		const response = await GamesService.getGameScreenshots(id);
		setScreenshots(response.results);
	});

	const handleClick = () => {
		setShowScreenshots(!showScreenshots);
		fetchScreenshots();
	};

	return (
		<>
			<Button onClick={handleClick} className={classes.GameScreenshotsButton}>
				Show screenshots {showScreenshots ? '- ' : '+ '}
			</Button>
			{showScreenshots && (
				<ScreenshotsList
					screenshots={screenshots}
					screenWidth='230px'
					screenHeight='165px'
				/>
			)}
		</>
	);
};