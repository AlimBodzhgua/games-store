import { FC, ReactNode } from 'react';
import classes from './modal.module.css';

interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
	const { onClose, children } = props;

	return (
		<div className={classes.modal}>
			<div className={classes.modal__inner}>
				{children}
				<button onClick={onClose} className={classes.modal__close}>
					&#x2716;
				</button>
			</div>
		</div>
	);
};
