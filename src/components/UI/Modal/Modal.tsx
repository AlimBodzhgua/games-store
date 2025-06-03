import { FC, ReactNode, useEffect } from 'react';
import classnames from 'classnames';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import classes from './modal.module.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	className?: string;
	withCloseButton?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
	const {
		isOpen,
		onClose,
		children,
		withCloseButton = true,
		className,
	} = props;

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onKeydown);
		

		return () => window.removeEventListener('keydown', onKeydown);
	}, []);


	const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	return (
		<Portal>
			<div
				className={classnames(classes.Modal, { [classes.isOpen]: isOpen })}
				onClick={onClose}
				role='button'
			>
				<Overlay>
					<div
						className={classnames(classes.content, className)}
						onClick={onContentClick}
					>
						{children}
						{withCloseButton && (
							<button onClick={onClose} className={classes.closeBtn}>
								&#10005;
							</button>
						)}
					</div>
				</Overlay>
			</div>
		</Portal>
	);
}