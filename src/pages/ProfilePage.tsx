import { useAppSelector } from '@/hooks/redux';
import { useAction } from '@/hooks/useAction';
import { useNavigate, NavLink } from 'react-router-dom';
import { ProfileInfo } from '@/components/Profile/ProfileInfo';

import classes from './pages.module.css';

export default function ProfilePage() {
	const { isAuth, data } = useAppSelector((state) => state.user);
	const { logout } = useAction();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	const handleLogout = () => {
		const confirm = window.confirm('Are you sure you want to logout?');
		if (confirm) {
			logout();
			navigate('/');
		}
	};

	if (!isAuth) {
		return (
			<div>
				<h1 className={classes.notlogged__title}>You not logged in</h1>
				<NavLink to='/login' className={`${classes.btn} ${classes.btnMt}`}>
					Login
				</NavLink>
				<NavLink to='/register' className={`${classes.btn} ${classes.btnMt}`}>
					Register
				</NavLink>
			</div>
		);
	}

	return (
		<div className={classes.page}>
			<div className={`${classes.page__header} ${classes.page__profile}`}>
				<h1>Account</h1>
				<div className={classes.actions}>
					<button className={classes.btn} onClick={handleClick}>
						go back
					</button>
					<button className={classes.btn} onClick={handleLogout}>
						logout
					</button>
				</div>
			</div>
			{data && <ProfileInfo user={data} />}
		</div>
	);
}
