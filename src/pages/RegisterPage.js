import RegisterForm from 'components/AuthForms/RegisterForm.js';

import classes from './pages.module.css'

export default function RegisterPage() {
	return (
		<div className={`${classes.page} ${classes.pageCentered}`}>
			<RegisterForm />
		</div>
	)
}