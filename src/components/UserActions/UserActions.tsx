import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
import { useAction } from '@/hooks/useAction';

import SignoutIcon from '@/assets/icons/signout_icon.svg';
import classes from './user-actions.module.css';

export const UserActions = () => {
	const user = useAppSelector((state) => state.user);
	const { logout } = useAction();

	const handleClick = () => {
		const confirm = window.confirm('Are you sure you want to logout?');
		if (confirm) logout();
	};

	return (
		<div className={classes.actions}>
			{user.isAuth ? (
				<>
					<NavLink to='/profile' className={classes.actions__link}>
						{user.data!.login}
					</NavLink>
					<button onClick={handleClick} className={classes.btn}>
						<SignoutIcon />
						out
					</button>
				</>
			) : (
				<>
					<NavLink to='/register' className={classes.actions__link}>
						Register
					</NavLink>
					<NavLink to='/login' className={classes.actions__link}>
						Login
					</NavLink>
				</>
			)}
		</div>
	);
}
