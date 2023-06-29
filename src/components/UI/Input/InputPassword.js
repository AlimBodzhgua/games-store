import {useState, forwardRef} from 'react';
import classes from  './input.module.css';
import Input from './Input.js';

import show from 'assets/icons/show.svg';
import hide from 'assets/icons/hide.svg';

const InputPassword = forwardRef((props, ref) => {
	const [isShow, setIsShow] = useState(false);

	const renderIcon = () => {
		return (
			<div 
				className={classes.icon}
				onClick={() => setIsShow(prev => !prev)}
			>
				<img src={isShow ? show : hide} />
			</div>
		)
	}

	return (
		<Input
			ref={ref}
			type="password"
			placeholder="Password"
			type={isShow ? 'text' : 'password'}
			addonAfter={renderIcon()}
			{...props}
		/>
	)
})


export default InputPassword;