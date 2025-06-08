import { useState } from 'react';

type HoverPropsType = {
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}


export const useHover = () => {
	const [isHover, setIsHover] = useState<boolean>(false);

	const hoverProps: HoverPropsType = {
		onMouseEnter: () => setIsHover(true),
		onMouseLeave: () => setIsHover(false),
	}

	return { isHover, hoverProps };
}