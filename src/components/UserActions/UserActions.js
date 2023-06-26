import {useEffect} from 'react';
import {useAction} from 'hooks/useAction';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {ReactComponent as Signout} from 'assets/icons/signout_icon.svg';
import classes from './user-actions.module.css';

export default function UserActions() {
	const user = useSelector(state => state.user);
	const {setIsAuthAction, setUserAction} = useAction();

	const handleClick = (e) => {
		e.preventDefault();
		const confirm = window.confirm('Are you sure you want to logout?');
		if (confirm) {
			localStorage.removeItem('user');
			setIsAuthAction(false);
			setUserAction(null);
		}
	}

	return (
		<div className={classes.actions}>
			{user.isAuth 
				?	<>
						<h3>{user.data.login}</h3>
						<button onClick={handleClick} className={classes.btn}>
							<Signout />
						</button>
					</>
				: 	<>
						<NavLink to='/register' className={classes.actions__link}>Register</NavLink>
						<NavLink to='/login' className={classes.actions__link}>Login</NavLink>			
					</>
			}
		</div>
	)
}