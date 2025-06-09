import { FC, ReactNode, useEffect } from 'react';
import { Portal } from '@/components/UI/Portal/Portal';
import { Overlay } from '@/components/UI/Overlay/Overlay';
import classnames from 'classnames';
import classes from './modal.module.css';

type ModalPaddingSize = 'sm' | 'md' | 'lg'; 

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	className?: string;
	paddingSize: ModalPaddingSize;
	withCloseButton?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
	const {
		isOpen,
		onClose,
		children,
		withCloseButton = true,
		paddingSize = 'lg',
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
						className={classnames(classes.content, className, classes[paddingSize])}
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