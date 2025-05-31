import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAction } from '@/hooks/useAction';
import { InputPassword } from '@/components/UI/Input/InputPassword';
import { Input } from '@/components/UI/Input/Input';
import defaultImage from '@/assets/default-image.jpg';
import classes from './auth-forms.module.css';

export const RegisterForm = () => {
	const {
		setUserAction,
		setErrorAction,
		setIsLoadingAction,
		setIsAuthAction,
		registerUser,
	} = useAction();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = (data) => {
		const newUser = { ...data, img: defaultImage, library: [] };
		registerUser(newUser);
		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
			<Input
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
				type='text'
				className={classes.input__dark}
				placeholder='Name'
			/>
			{errors.login && <p className={classes.error_message}>{errors.login.message}</p>}

			<Input
				{...register('email', {
					required: {
						value: true,
						message: 'Email is a required field',
					},
				})}
				type='email'
				className={classes.input__dark}
				placeholder='Email'
			/>
			{errors.email && <p className={classes.error_message}>{errors.email.message}</p>}

			<InputPassword
				{...register('password', {
					required: {
						value: true,
						message: 'Password is a required field',
					},
					minLength: {
						value: 6,
						message: 'Password must be at least 6 characters long',
					},
				})}
				className={classes.input__dark}
			/>
			{errors.password && (
				<p className={classes.error_message}>{errors.password.message}</p>
			)}

			<div className={classes.form_after}>
				<span>Already have an account?</span>
				<NavLink to='/login' className={classes.form_after_link}>
					login
				</NavLink>
			</div>
			<button type='submit' className={classes.btn}>
				sign up
			</button>
		</form>
	);
};
