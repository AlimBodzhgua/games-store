import classes from './auth-forms.module.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {useAction} from 'hooks/useAction.js';
import {useForm} from 'react-hook-form';
import InputPassword from 'components/UI/Input/InputPassword.js';
import Input from 'components/UI/Input/Input.js';
import UserService from 'API/UserService.js';

export default function LoginForm() {
	const {
		setUserAction, 
		setErrorAction, 
		setIsLoadingAction, 
		setIsAuthAction
	} = useAction();

	const {
		register, 
		handleSubmit, 
		formState: { errors }
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = (user) => {
		const loginUser = async(user) => {
			try {
				setIsLoadingAction(true);

				let { data } = await UserService.login(user);
				data = {token: data.accessToken, ...data.user};
				localStorage.setItem('user', JSON.stringify(data));

				setUserAction(data);
				setIsAuthAction(true);
				navigate('/');
			} catch (error){
				setErrorAction(error);
			}
		}
		loginUser(user);
	}


	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
			<Input 
				{...register('email', {
					required: {
						value: true,
						message: 'email is required filed'
					}
				})}
				className={classes.input__dark} 
				placeholder="Email"
				type="email" 
			/>
			{errors.email && <p className={classes.error_message}>{errors.email.message}</p>}
			<InputPassword 
				{...register('password', {
					required: {
						value: true,
						message: 'password is required field'
					}
				})}
				className={classes.input__dark} 
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