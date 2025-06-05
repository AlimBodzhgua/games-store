import { FC, memo, ReactNode } from 'react';
import classnames from 'classnames';
import classes from './Hotkey.module.css';

interface HotkeyProps {
	children: ReactNode;
	className?: string;
}

export const Hotkey: FC<HotkeyProps> = memo((props) => {
	const { children, className } = props;

	return (
		<div className={classnames(classes.Hotkey, className)}>
			{children}
		</div>
	);
});