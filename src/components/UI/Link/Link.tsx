import { FC, memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import classes from './link.module.css';

type LinkVariant = 'plain' | 'underline' | 'clean';
type LinkSize = 'sm' | 'md' | 'lg';

interface AppLinkProps extends LinkProps {
	children: ReactNode;
	size?: LinkSize;
	variant?: LinkVariant;
	className?: string;
}

export const Link: FC<AppLinkProps> = memo((props) => {
	const {
		children,
		className,
		size = 'md',
		variant = 'plain',
		...otherProps
	} = props;

	return (
		<NavLink
			className={classnames(classes.Link, classes[variant], classes[size], className)}
			{...otherProps}
		>
			{children}
		</NavLink>
	);
});