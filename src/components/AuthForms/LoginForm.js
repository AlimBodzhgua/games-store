import classes from './auth-forms.module.css';
import {NavLink} from 'react-router-dom';

export default function LoginForm() {

	return (
		<form className={classes.form}>
			<input 
				className={classes.input} 
				placeholder="Email"
				type="email" 
			/>
			<input 
				className={classes.input} 
				placeholder="Password"
				type="password" 
			/>
			<div className={classes.form_after}>
				<span>Don`t have an account?</span> 
				<NavLink to="/register" className={classes.form_after_link}>Register</NavLink>
			</div>
			<button type="submit" className={classes.btn}>login</button>
		</form>
	)
}