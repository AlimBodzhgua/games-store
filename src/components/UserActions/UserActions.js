import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './user-actions.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setIsAuthAction, setUserAction} from 'redux/reducers/user/actions';

export default function UserActions() {
	const { isAuth, user } = useSelector(state => state.user);
	const dispatch = useDispatch();

	/*useEffect(() => {
		console.log(JSON.parse(user).user.login);
	}, [])*/

	const handleClick = (e) => {
		e.preventDefault();
		localStorage.removeItem('user');
		localStorage.removeItem('auth');
		dispatch(setIsAuthAction(false));
		dispatch(setUserAction(null));
	}

	return (
		<div className={classes.actions}>
			{isAuth 
				?	<div>
						<h3>{JSON.parse(user).user.login}</h3>
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