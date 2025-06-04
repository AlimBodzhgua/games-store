import { Button } from '@/components/UI/Button/Button';
import classes from './NotFound.page.module.css';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
	const navigate = useNavigate();

	const onMainPage = () => navigate('/');

	return (
		<div className={classes.NotFound}>
			<div className={classes.wrapper}>
				<h1 className={classes.title}>404</h1>
				<div className={classes.info}>
					<h2>Whooops!</h2>
					<h2>Page Not Found.</h2>
				</div>
				<Button role='link' onClick={onMainPage} theme='white' size='lg'>
					Main page
				</Button>
			</div>
		</div>
	);
};
