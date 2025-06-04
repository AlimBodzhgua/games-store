import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
import { useAction } from '@/hooks/useAction';
import { Button } from '@/components/UI/Button/Button';
import { ProfileInfo } from '@/components/Profile/ProfileInfo';
import LockIcon from '@/assets/icons/lock.svg';
import classes from './profile.page.module.css';

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

	const onLogin = () => navigate('/login');
	const onRegister = () => navigate('/register');

	if (!isAuth) {
		return (
			<div className={classes.page}>
				<div className={classes.card}>
					<LockIcon className={classes.icon}/>
					<h1 className={classes.title}>Your not logged in.</h1>
					<h3 className={classes.subtitle}>You should register or login to visit this page.</h3>
					<div className={classes.actions}>
						<Button onClick={onLogin}>Login</Button>
						<Button onClick={onRegister}>Register</Button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={classes.page}>
			<div className={classes.header}>
				<h1>Account</h1>
				<div className={classes.actions}>
					<Button onClick={handleClick}>
						go back
					</Button>
					<Button onClick={handleLogout}>
						logout
					</Button>
				</div>
			</div>
			{data && <ProfileInfo user={data} />}
		</div>
	);
}
