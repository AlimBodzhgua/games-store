import { FC } from 'react';
import classes from './profile.module.css';

interface ItemActionsProps {
	onComplete: () => void;
	onCancel: () => void;
}

export const ItemActions: FC<ItemActionsProps> = (props) => {
	const { onComplete, onCancel } = props;
	return (
		<div className={classes.actions}>
			<button onClick={onComplete} className={classes.btn__complete}>
				&#x2714;
			</button>
			<button onClick={onCancel} className={classes.btn__cancel}>
				&#10005;
			</button>
		</div>
	);
};
