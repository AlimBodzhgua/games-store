import { LoginForm } from '@/components/AuthForms/LoginForm';
import classes from './pages.module.css';

export const LoginPage = () => {

	return (
		<div className={`${classes.page} ${classes.pageCentered}`}>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
