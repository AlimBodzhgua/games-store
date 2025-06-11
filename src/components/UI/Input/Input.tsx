import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import classnames from 'classnames';
import classes from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	addonBefore?: ReactNode;
	addonAfter?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, addonBefore, addonAfter, ...otherProps } = props;

	return (
		<div className={classnames(classes.input, className)}>
			{addonBefore}
			<input ref={ref} {...otherProps} className={classes.field}/>
			{addonAfter}
		</div>
	);
});
