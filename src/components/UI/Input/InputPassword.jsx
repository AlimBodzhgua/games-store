import { useState, forwardRef } from 'react';
import { Input } from './Input.jsx';
import classes from './input.module.css';

import ShowIcon from '@/assets/icons/show.svg';
import HideIcon from '@/assets/icons/hide.svg';

export const InputPassword = forwardRef((props, ref) => {
	const [isShow, setIsShow] = useState(false);

	const onToggleShow = () => setIsShow((prev) => !prev);

	const renderIcon = () => {
		return (
			<div className={classes.icon} role='button' onClick={onToggleShow}>
				{!isShow ? <ShowIcon /> : <HideIcon />}
			</div>
		);
	};

	return (
		<Input
			ref={ref}
			placeholder='Password'
			type={isShow ? 'text' : 'password'}
			addonAfter={renderIcon()}
			{...props}
		/>
	);
});
