import { FC, memo } from 'react';
import { Button } from '../UI/Button/Button';
import classes from './ErrorMessage.module.css';

export const ErrorMessage: FC = memo(() => {

	const onReload = () => location.reload();

	return (
		<div className={classes.Error}>
			<h1 className={classes.errorCode}>500</h1>
			<h2 className={classes.title}>Internal Server Error</h2>
			<div className={classes.subtitle}>
				Something went wron on the server. Reload the page or try it later.
			</div>
			<Button theme='blue' onClick={onReload}>
				reload
			</Button>
		</div>
	);
});