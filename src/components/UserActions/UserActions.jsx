import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAction } from '@/hooks/useAction';

//import SignoutIcon from '@/assets/icons/signout_icon.svg';
import classes from './user-actions.module.css';

export const UserActions = () => {
	const user = useSelector((state) => state.user);
	const { setIsAuthAction, setUserAction, logout } = useAction();

	const handleClick = (e) => {
		e.preventDefault();
		const confirm = window.confirm('Are you sure you want to logout?');
		if (confirm) logout();
	};

	return (
		<div className={classes.actions}>
			{user.isAuth ? (
				<>
					<NavLink to='/profile' className={classes.actions__link}>
						{user.data.login}
					</NavLink>
					<button onClick={handleClick} className={classes.btn}>
						{/* <SignoutIcon /> */}
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
