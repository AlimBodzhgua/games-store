import { ChangeEvent, FC, useState } from 'react';
import { useAction } from '@/hooks/useAction';
import type { User } from '@/types/user';
import { ProfileImage } from './ProfileImage';
import { InfoItem } from './InfoItem';
import classes from './profile.module.css';

interface ProfileInfoProps {
	user: User;
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ user }) => {
	const [email, setEmail] = useState<string>(user.email);
	const [emailChanging, setEmailChanging] = useState<boolean>(false);

	const [login, setLogin] = useState<string>(user.login);
	const [loginChanging, setLoginChanging] = useState<boolean>(false);
	
	const { changeLoginAction, changeEmailAction } = useAction();

	const onToggleEmailChanging = () => {
		setEmailChanging((prev) => !prev);
	};

	const onToggleLoginChanging = () => {
		setLoginChanging((prev) => !prev);
	}

	const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLogin(e.target.value);
	};

	const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const saveLoginChange = (login: string) => {
		changeLoginAction(login);
		onToggleLoginChanging();
	};

	const saveEmailChange = (email: string) => {
		changeEmailAction(email);
		onToggleEmailChanging();
	};

	return (
		<div className={classes.profile}>
			<ProfileImage />

			<div className={classes.info}>
				<h3 className={classes.info__title}>Login</h3>
				<InfoItem
					value={login}
					isChanging={loginChanging}
					onChange={onLoginChange}
					onCancel={onToggleLoginChanging}
					onSave={saveLoginChange}
				/>
			</div>

			<div className={classes.info}>
				<h3 className={classes.info__title}>Email</h3>
				<InfoItem
					value={email}
					isChanging={emailChanging}
					onChange={onEmailChange}
					onCancel={onToggleEmailChanging}
					onSave={saveEmailChange}
				/>
			</div>
		</div>
	);
};
