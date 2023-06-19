import classes from './pagination.module.css';
import PropTypes from 'prop-types';
import Pages from './Pages.js';
import {useDispatch, useSelector} from 'react-redux';
import {setPageAction} from 'redux/reducers/games/actions.js';

const pages = [1, 2, 3, 4, 5, 6]

export default function Pagination() {
	const {page} = useSelector(state => state.games);
	const dispatch = useDispatch();

	const handleClick = (page) => {
		dispatch(setPageAction(page));
		window.scrollTo(0, 0);
	}

	const nextClick = () => {
		dispatch(setPageAction(page + 1));
		window.scrollTo(0, 0);
	}

	const prevClick = () => {
		dispatch(setPageAction(page - 1));
		window.scrollTo(0, 0);
	}

	return (
		<ul className={classes.pagination}>
			<button 
				onClick={prevClick} 
				className={classes.btn} 
				disabled={page === 1}
			>&lt;</button>
			<Pages 
				pages={pages}
				currentPage={page}
				handleClick={handleClick}
			/>
			<button 
				onClick={nextClick} 
				className={classes.btn}
				disabled={page === pages.length}
			>&gt;</button>
		</ul>
	)
}