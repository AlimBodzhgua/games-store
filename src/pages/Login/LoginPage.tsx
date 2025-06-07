import { LoginForm } from '@/components/AuthForms/LoginForm';
import classes from './login.pages.module.css';

export const LoginPage = () => {

	return (
		<div className={classes.LoginPage}>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
