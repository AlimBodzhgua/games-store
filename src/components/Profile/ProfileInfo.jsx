import { useState } from 'react';
import { useAction } from '@/hooks/useAction';
import { ProfileImage } from './ProfileImage';
import { InfoItem } from './InfoItem';
import classes from './profile.module.css';

export const ProfileInfo = ({ data }) => {
	const [emailChange, setEmailChange] = useState({ value: '', isChanging: false });
	const [loginChange, setLoginChange] = useState({ value: '', isChanging: false });
	const { changeLoginAction, changeEmailAction } = useAction();

	const handleEmailChanging = () => {
		setEmailChange({ value: data.email, isChanging: true });
	};

	const handleLoginChanging = () => {
		setLoginChange({ value: data.login, isChanging: true });
	};

	const handleCancelLoginChanging = () => {
		setLoginChange({ ...loginChange, isChanging: false });
	};

	const handleCancelEmailChanging = () => {
		setEmailChange({ ...loginChange, isChanging: false });
	};

	const onLoginChange = (e) => {
		setLoginChange({ ...loginChange, value: e.target.value });
	};

	const onEmailChange = (e) => {
		setEmailChange({ ...emailChange, value: e.target.value });
	};

	const saveLoginChange = (login) => {
		changeLoginAction(login);
		handleCancelLoginChanging();
	};

	const saveEmailChange = (email) => {
		changeEmailAction(email);
		handleCancelEmailChanging();
	};

	return (
		<div className={classes.profile}>
			<ProfileImage />

			<div className={classes.info}>
				<h3 className={classes.info__title}>Login</h3>
				<InfoItem
					value={data.login}
					valueChange={loginChange}
					onValueChange={onLoginChange}
					saveValueChange={saveLoginChange}
					handleChanging={handleLoginChanging}
					handleCancelChanging={handleCancelLoginChanging}
				/>
			</div>

			<div className={classes.info}>
				<h3 className={classes.info__title}>Email</h3>
				<InfoItem
					value={data.email}
					valueChange={emailChange}
					onValueChange={onEmailChange}
					saveValueChange={saveEmailChange}
					handleChanging={handleEmailChanging}
					handleCancelChanging={handleCancelEmailChanging}
				/>
			</div>
		</div>
	);
};
