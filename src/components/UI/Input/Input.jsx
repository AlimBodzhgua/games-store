import { forwardRef } from 'react';
import classes from './input.module.css';

export const Input = forwardRef((props, ref) => {
	const { addonBefore, addonAfter, ...restProps } = props;

	return (
		<div className={classes.input}>
			{addonBefore}
			<input ref={ref} {...restProps} />
			{addonAfter}
		</div>
	);
});
