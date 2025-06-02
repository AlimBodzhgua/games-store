import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import classes from './Button.module.css';
import classnames from 'classnames';

type ButtonTheme = 'primary' | 'white' | 'blue';
type ButtonVariants = 'solid' | 'outline' | 'clean';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: ButtonVariants;
	theme?: ButtonTheme;
	size?: ButtonSize;
	className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		className,
		variant = 'solid',
		theme = 'primary',
		size = 'md',
		...otherProps
	} = props;

	return (
		<button
			className={classnames(
				classes.Button,
				className,
				classes[size],
				classes[variant],
				classes[theme],
			)}
			{...otherProps}
		>
			{children}
		</button>
	);
}