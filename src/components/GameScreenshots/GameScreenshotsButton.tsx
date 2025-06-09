import { FC, useState } from 'react';
import { Button } from '@/components/UI/Button/Button';
import { useGameScreenshots } from '@/hooks/useGameScreenshots';
import { Skeleton } from '@/components/UI/Skeleton/Skeleton';
import { ScreenshotsList } from './ScreenshotsList';
import classes from './screenshots.module.css';

interface GameScreenshotsProps {
	id: number;
}

export const GameScreenshotsButton: FC<GameScreenshotsProps> = ({ id }) => {
	const [showScreenshots, setShowScreenshots] = useState(false);
	const { fetchScreenshots, screenshots, isLoading } = useGameScreenshots(id);

	const handleClick = () => {
		setShowScreenshots(!showScreenshots);
		fetchScreenshots();
	};

	return (
		<>
			<Button onClick={handleClick} className={classes.GameScreenshotsButton}>
				Show screenshots {showScreenshots ? '- ' : '+ '}
			</Button>
			{isLoading && (
				<div className={classes.screenshots}>
					{Array(6).fill(0).map((_, index) => (
						<Skeleton key={index} width='230px' height='165px' margin='5px'/>
					))}
				</div>
			)}
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