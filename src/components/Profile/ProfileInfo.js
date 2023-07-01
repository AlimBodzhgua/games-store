import {useState, useEffect} from 'react';
import {useAction} from 'hooks/useAction';
import PropTypes from 'prop-types';

import classes from './profile.module.css';

export default function ProfileInfo({data}) {
	const [emailChange, setEmailChange] = useState({value: '', isChanging: false});
	const [loginChange, setLoginChange] = useState({value: '', isChanging: false});
	const {changeLoginAction, changeEmailAction} = useAction();

	const handleEmailChange = (e) => {
		e.preventDefault();
		setEmailChange({value: data.email, isChanging: true});
	}

	const handleLoginChange = (e) => {
		e.preventDefault();
		setLoginChange({value: data.login, isChanging: true});
	}

	const handleCancelLoginChange = () => {
		setLoginChange({...loginChange, isChanging: false});
	}

	const handleCancelEmailChange = () => {
		setEmailChange({...loginChange, isChanging: false});
	}

	const changeLogin = (login) => {
		changeLoginAction(login);
		handleCancelLoginChange();
	}

	const changeEmail = (email) => {
		changeEmailAction(email);
		handleCancelEmailChange();
	}

	return (
		<div className={classes.profile}>
			<div className={classes.info}>
				<h3 className={classes.info__title}>Login</h3>
				<div className={classes.info__item}>
					{loginChange.isChanging 
						? <>
							<input 
								className={classes.input} 
								type="text" 
								value={loginChange.value} 
								onChange={(e) => setLoginChange({...loginChange, value: e.target.value})}
						  	/>
						  	<div className={classes.actions}>
							  	<button 
							  		onClick={() => changeLogin(loginChange.value)}
							  		className={classes.btn__complete}
							  	>&#x2714;</button>
							  	<button 
							  		onClick={handleCancelLoginChange} 
							  		className={classes.btn__cancel}
							  	>&#10005;</button>
						  	</div>
						  </>
						: <>
							<div>{data.login}</div>
							<button 
								onClick={handleLoginChange} 
								className={classes.btn}
							>edit</button>
						  </>
					}
				</div>
			</div>

			<div className={classes.info}>
				<h3 className={classes.info__title}>Email</h3>
				<div className={classes.info__item}>
					{emailChange.isChanging 
						? <>
							<input 
								className={classes.input} 
								type="text" 
								value={emailChange.value} 
								onChange={(e) => setEmailChange({...emailChange, value: e.target.value})}
						  	/>
						  	<div className={classes.actions}>
							  	<button 
							  		onClick={() => changeEmail(emailChange.value)}
							  		className={classes.btn__complete}
							  	>&#x2714;</button>
							  	<button 
							  		onClick={handleCancelEmailChange} 
							  		className={classes.btn__cancel}
							  	>&#10005;</button>
						  	</div>
						  </>
						: <>
							<div>{data.email}</div>
							<button 
								onClick={handleEmailChange} 
								className={classes.btn}
							>edit</button>
						  </>
					}
				</div>
			</div>
			<input 
				type="file" 
				onChange={(e) => console.log(e)}
			/>
		</div>
	)
}