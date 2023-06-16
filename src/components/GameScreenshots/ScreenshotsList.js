import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classes from './screenshots.module.css';
import Modal from 'components/Modal/Modal.js';

export default function ScreenshotsList(screenshots) {
	const [increasedScreenshot, setIncreasedScreenshot] = useState(false);
	const increaseScreenshot = () => {
		setIncreasedScreenshot(!increasedScreenshot);
	}

	return (
		<>
			{screenshots['screenshots'].map(screenshot =>
				<div key={screenshot.id}>
					<img 
						onClick={increaseScreenshot}
						src={screenshot.image}
						className={classes.screenshot}
					/>
					{increasedScreenshot && 
						<Modal handler={increaseScreenshot}>
							<img 
								src={screenshot.image}
								className={classes.screenshot__opened}
							/>
						</Modal>
					}
				</div>
			)}
		</>
	)
}