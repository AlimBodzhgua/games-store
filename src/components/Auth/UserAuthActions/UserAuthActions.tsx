import { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { useAction } from '@/hooks/useAction';
import { Link } from '@/components/UI/Link/Link';
import { Button } from '@/components/UI/Button/Button';
import { selectUserData } from '@/redux/selectors/userSelectors';
import SignoutIcon from '@/assets/icons/signout_icon.svg';

import classes from './user-actions.module.css';
import classnames from 'classnames';

interface UserAuthActionsProps {
	className?: string;
}

export const UserAuthActions: FC<UserAuthActionsProps> = (props) => {
	const { className } = props;
	const user = useAppSelector(selectUserData);
	const { logout } = useAction();

	const handleClick = () => {
		const confirm = window.confirm('Are you sure you want to logout?');
		if (confirm) logout();
	};

	return (
		<div className={classnames(classes.actions, className)}>
			{user ? (
				<>
					<Link to='/profile'>
						{user.login}
					</Link>
					<Button onClick={handleClick} variant='clean'>
						logout
						<SignoutIcon className={classes.icon} />
					</Button>
				</>
			) : (
				<>
					<Link to='/register'>
						Register
					</Link>
					<Link to='/login'>
						Login
					</Link>
				</>
			)}
		</div>
	);
}
