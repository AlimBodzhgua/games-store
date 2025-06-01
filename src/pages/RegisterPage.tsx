import { RegisterForm } from '@/components/AuthForms/RegisterForm';

import classes from './pages.module.css';

const RegisterPage = () => {
	return (
		<div className={`${classes.page} ${classes.pageCentered}`}>
			<RegisterForm />
		</div>
	);
};


export default RegisterPage