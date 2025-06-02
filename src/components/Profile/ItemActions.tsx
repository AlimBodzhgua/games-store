import { FC } from 'react';
import classes from './profile.module.css';
import { Button } from '../UI/Button/Button';

interface ItemActionsProps {
	onComplete: () => void;
	onCancel: () => void;
}

export const ItemActions: FC<ItemActionsProps> = (props) => {
	const { onComplete, onCancel } = props;
	return (
		<div className={classes.actions}>
			<Button onClick={onComplete} theme='blue'>
				&#x2714;
			</Button>
			<Button onClick={onCancel}>
				&#10005;
			</Button>
		</div>
	);
};
