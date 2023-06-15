import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './user-actions.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setIsAuthAction, setUserAction} from 'redux/reducers/user/actions';

export default function UserActions() {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		localStorage.removeItem('user');
		dispatch(setIsAuthAction(false));
		dispatch(setUserAction(null));
	}

	return (
		<div className={classes.actions}>
			{user.isAuth 
				?	<div>
						<h3>{user.data.user.login}</h3>
						<button onClick={handleClick}>logout</button>
					</div>
				: 	<>
						<NavLink to='/register' className={classes.actions__link}>Register</NavLink>
						<NavLink to='/login' className={classes.actions__link}>Login</NavLink>			
					</>
			}
		</div>
	)
}