import { useState, useRef, FC } from 'react';
import classes from './screenshots.module.css';
import { Modal } from '../UI/Modal/Modal';

type Screenshot = {
	id: number;
	image: string;
}

interface ScreenshotsListProps {
	screenshots: Screenshot[];
}

export const ScreenshotsList: FC<ScreenshotsListProps> = (props) => {
	const { screenshots } = props;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const imageRef = useRef<string>(undefined);

	const increaseScreenshot = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		imageRef.current = e.currentTarget.src;
		setIsOpen((prev) => !prev);
	};

	const onCloseModal = () => setIsOpen(false);

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
			<Modal isOpen={isOpen} onClose={onCloseModal} className={classes.modal}>
				<img src={imageRef.current} className={classes.screenshot__opened} />
			</Modal>
		</>
	);
};
