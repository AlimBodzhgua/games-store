import { FC } from 'react';
import classes from './pagination.module.css';

interface PagesProps {
	pages: number[]
	currentPage: number;
	handleClick: (page: number) => void;
}

export const Pages: FC<PagesProps> = (props) => {
	const { pages, currentPage, handleClick } = props;

	return pages.map((page, index) => (
		<li
			className={
				page === currentPage ? `${classes.item} ${classes.active}` : classes.item
			}
			key={index}
			onClick={() => handleClick(page)}
		>
			{page}
		</li>
	));
};
