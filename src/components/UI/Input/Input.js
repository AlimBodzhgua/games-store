import {forwardRef} from 'react';
import classes from './input.module.css';


const Input = forwardRef((props, ref) => {
	const { addonBefore, addonAfter, ...restProps } = props;
	console.log(restProps)

	return (
		<div className={classes.input}>
			{addonBefore}
			<input 
				ref={ref}
				{...restProps}
			/>
			{addonAfter}
		</div>
	)
});

export default Input;