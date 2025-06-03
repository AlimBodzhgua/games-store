import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import classes from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	addonBefore?: ReactNode;
	addonAfter?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { addonBefore, addonAfter, ...otherProps } = props;

	return (
		<div className={classes.input}>
			{addonBefore}
			<input ref={ref} {...otherProps} />
			{addonAfter}
		</div>
	);
});
