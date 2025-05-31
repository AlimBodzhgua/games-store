import { useSelector } from 'react-redux';
import { useAction } from '@/hooks/useAction';
import { Pages } from './Pages';
import classes from './pagination.module.css';

const pages = [1, 2, 3, 4, 5, 6];

export const Pagination = () => {
	const { page } = useSelector((state) => state.games);
	const { setPageAction } = useAction();

	const handleClick = (page) => {
		setPageAction(page);
		window.scrollTo(0, 0);
	};

	const nextClick = () => {
		setPageAction(page + 1);
		window.scrollTo(0, 0);
	};

	const prevClick = () => {
		setPageAction(page - 1);
		window.scrollTo(0, 0);
	};

	return (
		<ul className={classes.pagination}>
			<button onClick={prevClick} className={classes.btn} disabled={page === 1}>
				&lt;
			</button>
			<Pages pages={pages} currentPage={page} handleClick={handleClick} />
			<button
				onClick={nextClick}
				className={classes.btn}
				disabled={page === pages.length}
			>
				&gt;
			</button>
		</ul>
	);
}
