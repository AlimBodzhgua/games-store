import { RegisterForm } from '@/components/AuthForms/RegisterForm';
import classes from './register.page.module.css';

const RegisterPage = () => {
	return (
		<div className={classes.RegisterPage}>
			<RegisterForm />
		</div>
	);
};


export default RegisterPage