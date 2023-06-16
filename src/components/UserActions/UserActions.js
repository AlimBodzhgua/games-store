import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './user-actions.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setIsAuthAction, setUserAction} from 'redux/reducers/user/actions';
import {ReactComponent as Signout} from 'assets/icons/signout_icon.svg';

export default function UserActions() {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		const confirm = window.confirm('Are you sure you want to logout?');
		if (confirm) {
			localStorage.removeItem('user');
			dispatch(setIsAuthAction(false));
			dispatch(setUserAction(null));
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