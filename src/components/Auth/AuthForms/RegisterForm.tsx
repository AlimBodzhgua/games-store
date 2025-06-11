import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAction } from '@/hooks/useAction';
import { InputPassword } from '@/components/UI/Input/InputPassword';
import { Input } from '@/components/UI/Input/Input';
import { Button } from '@/components/UI/Button/Button';
import { Link } from '@/components/UI/Link/Link';
import defaultImage from '@/assets/default-image.jpg';
import classes from './auth-forms.module.css';

type RegisterFormData = {
	login: string;
	email: string;
	password: string;	
}

export const RegisterForm = () => {
	const {
		registerUser,
	} = useAction();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>();

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
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
				className={classes.input}
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
				className={classes.input}
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
				className={classes.input}
			/>
			{errors.password && (
				<p className={classes.error_message}>{errors.password.message}</p>
			)}

			<div className={classes.accountSection}>
				<span className={classes.accountMessage}>Already have an account?</span>
				<Link to='/login'>
					login
				</Link>
			</div>
			<Button
				type='submit'
				size='lg'
				theme='blue'
			>
				sign up
			</Button>
		</form>
	);
};
