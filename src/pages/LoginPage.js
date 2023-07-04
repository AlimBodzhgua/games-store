import LoginForm from 'components/AuthForms/LoginForm.js';

import classes from './pages.module.css'

export default function LoginPage() {
	return(
		<div className={`${classes.page} ${classes.pageCentered}`}>
			<LoginForm />
		</div>
	) 
}