import { useState, useRef, memo } from 'react';
import { isImgElement } from '@/utils/utils';
import { Modal } from '@/components/UI/Modal/Modal';
import PropTypes from 'prop-types';

import classes from './screenshots.module.css';

export const ScreenshotsList = ({ screenshots }) => {
	const [increasedScreenshot, setIncreasedScreenshot] = useState(false);
	const imageRef = useRef();

	const increaseScreenshot = (e) => {
		if (isImgElement(e.target)) {
			imageRef.current = e.target.getAttribute('src');
		}
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

ScreenshotsList.propTypes = {
	screenshots: PropTypes.arrayOf(PropTypes.object).isRequired,
};
