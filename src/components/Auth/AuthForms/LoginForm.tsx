import { NavLink, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAction } from '@/hooks/useAction';
import { InputPassword } from '@/components/UI/Input/InputPassword';
import { Input } from '@/components/UI/Input/Input';
import classes from './auth-forms.module.css';
import { Button } from '@/components/UI/Button/Button';
import { Link } from '@/components/UI/Link/Link';

type LoginFormData = {
	email: string;
	password: string;	
}

export const LoginForm = () => {
	const { login } = useAction();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>();

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<LoginFormData> = (user) => {
		login(user);
		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
			<Input
				{...register('email', {
					required: {
						value: true,
						message: 'email is required filed',
					},
				})}
				className={classes.input}
				placeholder='Email'
				type='email'
			/>
			{errors.email && <p className={classes.error_message}>{errors.email.message}</p>}
			<InputPassword
				{...register('password', {
					required: {
						value: true,
						message: 'password is required field',
					},
				})}
				className={classes.input}
			/>
			{errors.password && (
				<p className={classes.error_message}>{errors.password.message}</p>
			)}

			<div className={classes.accountSection}>
				<span className={classes.accountMessage}>Don't have an account?</span>
				<Link to='/register' className={classes.form_after_link}>
					Register
				</Link>
			</div>
			<Button type='submit' theme='blue' size='lg'>
				login
			</Button>
		</form>
	);
};
