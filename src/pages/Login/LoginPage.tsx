import { LoginForm } from '@/components/Auth';
import classes from './login.page.module.css';

export const LoginPage = () => {

	return (
		<div className={classes.LoginPage}>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
