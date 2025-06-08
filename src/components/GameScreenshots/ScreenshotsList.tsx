import { useState, useRef, FC, CSSProperties } from 'react';
import { Modal } from '@/components/UI/Modal/Modal';
import type { Screenshot } from '@/types/game';
import classes from './screenshots.module.css';

interface ScreenshotsListProps {
	screenshots: Screenshot[];
	screenWidth?: string;
	screenHeight?: string;
}

export const ScreenshotsList: FC<ScreenshotsListProps> = (props) => {
	const {
		screenshots,
		screenWidth = '50px',
		screenHeight = '50px',
	} = props;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const imageRef = useRef<string>(undefined);

	const increaseScreenshot = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		imageRef.current = e.currentTarget.src;
		setIsOpen((prev) => !prev);
	};

	const onCloseModal = () => setIsOpen(false);

	const sizes: Pick<CSSProperties, 'width' | 'height'> = {
		width: screenWidth,
		height: screenHeight,
	}

	return (
		<>
			<div className={classes.screenshots}>
				{screenshots.map((screenshot) => (
					<img
						key={screenshot.id}
						src={screenshot.image}
						onClick={increaseScreenshot}
						className={classes.screenshot}
						style={sizes}
					/>
				))}
			</div>
			<Modal isOpen={isOpen} onClose={onCloseModal} className={classes.modal}>
				<img src={imageRef.current} className={classes.screenshot__opened} />
			</Modal>
		</>
	);
};
