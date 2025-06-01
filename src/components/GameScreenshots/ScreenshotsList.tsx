import { useState, useRef, memo, FC } from 'react';
import { Modal } from '@/components/UI/Modal/Modal';
import classes from './screenshots.module.css';

type Screenshot = {
	id: number;
	image: string;
}

interface ScreenshotsListProps {
	screenshots: Screenshot[];
}

export const ScreenshotsList: FC<ScreenshotsListProps> = (props) => {
	const { screenshots } = props;
	const [increasedScreenshot, setIncreasedScreenshot] = useState(false);
	const imageRef = useRef<string>(undefined);

	const increaseScreenshot = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		imageRef.current = e.currentTarget.src;
		setIncreasedScreenshot(!increasedScreenshot);
	};

	return (
		<>
			{screenshots.map((screenshot) => (
				<img
					key={screenshot.id}
					src={screenshot.image}
					onClick={increaseScreenshot}
					className={classes.screenshot}
				/>
			))}
			{increasedScreenshot && (
				<Modal handler={increaseScreenshot}>
					<img src={imageRef.current} className={classes.screenshot__opened} />
				</Modal>
			)}
		</>
	);
};
