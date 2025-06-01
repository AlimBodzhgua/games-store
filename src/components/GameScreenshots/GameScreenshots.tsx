import { FC, useState } from 'react';
import { useFetching } from '@/hooks/useFetching';
import { GamesService } from '@/API/GamesService';
import { ScreenshotsList } from './ScreenshotsList';

import classes from './screenshots.module.css';

interface GameScreenshotsProps {
	id: number;
}

export const GameScreenshots: FC<GameScreenshotsProps> = ({ id }) => {
	const [showScreenshots, setShowScreenshots] = useState(false);
	const [screenshots, setScreenshots] = useState([]);
	const { fetching: fetchScreenshots, isLoading, error } = useFetching(async () => {
		const response = await GamesService.getGameScreenshots(id);
		setScreenshots(response.results);
	});

	const handleClick = () => {
		setShowScreenshots(!showScreenshots);
		fetchScreenshots();
	};

	return (
		<div className={classes.screenshots__section}>
			<button onClick={handleClick} className={classes.button}>
				{showScreenshots ? '- ' : '+ '} Show screenshots
			</button>
			{showScreenshots && (
				<div className={classes.screenshots}>
					{screenshots.length && <ScreenshotsList screenshots={screenshots} />}
				</div>
			)}
		</div>
	);
};