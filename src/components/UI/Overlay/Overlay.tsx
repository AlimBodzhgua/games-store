import { FC, ReactNode } from 'react';
import classes from './overlay.module.css'
import classnames from 'classnames';

interface OverlayProps {
	children: ReactNode;
	className?: string;
}

export const Overlay: FC<OverlayProps> = (props) => {
	const { children, className } = props;

	return (
		<div className={classnames(classes.Overlay, className)}>
			{children}
		</div>
	)
}