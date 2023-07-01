import {useState, useEffect} from 'react';
import {useAction} from 'hooks/useAction';
import ItemActions from './ItemActions';
import Input from 'components/UI/Input/Input.js';
import ImageUpload from './ImageUpload.js';
import PropTypes from 'prop-types';

import classes from './profile.module.css';

export default function ProfileInfo({data}) {
	const [emailChange, setEmailChange] = useState({value: '', isChanging: false});
	const [loginChange, setLoginChange] = useState({value: '', isChanging: false});
	const {changeLoginAction, changeEmailAction} = useAction();

	const handleEmailChange = () => {
		setEmailChange({value: data.email, isChanging: true});
	}

	const handleLoginChange = () => {
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
			<ImageUpload />
		
			<div className={classes.info}>
				<h3 className={classes.info__title}>Login</h3>
				<div className={classes.info__item}>
					{loginChange.isChanging 
						? <>
							<Input
								className={classes.input} 
								type="text" 
								value={loginChange.value} 
								onChange={(e) => setLoginChange({...loginChange, value: e.target.value})}
						  	/>
						  	<ItemActions 
						  		completeHandler={() => changeLogin(loginChange.value)}
						  		cancelHandler={handleCancelLoginChange}
						  	/>
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
							<Input 
								className={classes.input} 
								type="text" 
								value={emailChange.value} 
								onChange={(e) => setEmailChange({...emailChange, value: e.target.value})}
						  	/>
						  	<ItemActions 
						  		completeHandler={() => changeEmail(loginChange.value)}
						  		cancelHandler={handleCancelLoginChange}
						  	/>
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
		</div>
	)
}