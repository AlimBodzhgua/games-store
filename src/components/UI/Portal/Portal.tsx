import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
	placement?: Element;
}

export const Portal: FC<PortalProps> = (props) => {
	const {
		children,
		placement = document.body,
	} = props;

	return createPortal(children, placement);
};