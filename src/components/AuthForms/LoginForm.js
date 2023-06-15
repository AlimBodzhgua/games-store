import classes from './auth-forms.module.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import UserService from 'API/UserService.js';
import {useDispatch} from 'react-redux';
import {
	setUserAction, 
	setErrorAction, 
	setIsLoadingAction, 
	setIsAuthAction
} from 'redux/reducers/user/actions.js';

export default function LoginForm() {
	const {
		register, 
		handleSubmit, 
		formState: { errors }
	} = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const onSubmit = (user) => {
		const loginUser = async(user) => {
			try {
				dispatch(setIsLoadingAction(true));

				const { data } = await UserService.login(user);
				localStorage.setItem('user', JSON.stringify(data));

				dispatch(setUserAction(data));
				dispatch(setIsAuthAction(true));
				navigate('/');
			} catch (error){
				dispatch(setErrorAction(error))
			}
		}
		loginUser(user);
	}


	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
			<input 
				{...register('email', {
					required: {
						value: true,
						message: 'email is required filed'
					}
				})}
				className={classes.input} 
				placeholder="Email"
				type="email" 
			/>
			{errors.email && <p className={classes.error_message}>{errors.email.message}</p>}
			<input 
				{...register('password', {
					required: {
						value: true,
						message: 'password is required field'
					}
				})}
				className={classes.input} 
				placeholder="Password"
				type="password" 
			/>
			{errors.password && <p className={classes.error_message}>{errors.password.message}</p>}

			<div className={classes.form_after}>
				<span>Don`t have an account?</span> 
				<NavLink to="/register" className={classes.form_after_link}>Register</NavLink>
			</div>
			<button type="submit" className={classes.btn}>login</button>
		</form>
	)
}