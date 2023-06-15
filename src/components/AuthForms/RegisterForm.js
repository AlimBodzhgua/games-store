import classes from './auth-forms.module.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import UserService from 'API/UserService.js';

import {
	setUserAction, 
	setErrorAction, 
	setIsLoadingAction, 
	setIsAuthAction
} from 'redux/reducers/user/actions.js';

export default function RegisterForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		const newUser = {...data, library: []}

		async function register(user) {
			try {
				dispatch(setIsLoadingAction(true));

				const {data} = await UserService.registerUser(newUser);
				localStorage.setItem('user', JSON.stringify(data));
				
				dispatch(setUserAction(data));
				dispatch(setIsAuthAction(true));
				navigate('/');
			} catch(error) {
				dispatch(setErrorAction(error));
			}
		}
		register(newUser);
		
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
			<input 
				{...register('login', {
					required: {
						value: true,
						message: 'Login is a required field',
					},
					minLength: {
						value: 6,
						message: 'Login must be at least 6 characters long',
					},
				})}
				type="text" 
				className={classes.input}
				placeholder="Name"
			/>
			{errors.login && <p className={classes.error_message}>{errors.login.message}</p>}

			<input 
				{...register('email', {
					required: {
						value: true,
						message: 'Email is a required field',
					}
				})}
				type="email" 
				className={classes.input}
				placeholder="Email"
			/>
			{errors.email && <p className={classes.error_message}>{errors.email.message}</p>}

			<input 
				{...register('password', {
					required: {
						value: true,
						message: 'Password is a required field',
					},
					minLength: {
						value: 6,
						message: 'Password must be at least 6 characters long'
					}
				})}
				type="password" 
				className={classes.input}
				placeholder="Password"
			/>
			{errors.password && <p className={classes.error_message}>{errors.password.message}</p>}

			<div className={classes.form_after}>
				<span>Already have an account?</span> 
				<NavLink to="/login" className={classes.form_after_link}>login</NavLink>
			</div>
			<button type="submit" className={classes.btn}>sign up</button>
		</form>
	)
}