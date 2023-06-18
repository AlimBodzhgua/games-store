import classes from './pagination.module.css';
import PropTypes from 'prop-types';
import Pages from './Pages.js';

const pages = [1, 2, 3, 4, 5, 6]

export default function Pagination({currentPage, setPage}) {

	const handleClick = (page) => {
		setPage(page);
		window.scrollTo(0, 0);
	}

	const nextClick = () => {
		setPage(prev => prev + 1);
		window.scrollTo(0, 0);
	}

	const prevClick = () => {
		setPage(prev => prev - 1);
		window.scrollTo(0, 0);
	}

	return (
		<ul className={classes.pagination}>
			<button 
				onClick={prevClick} 
				className={classes.btn} 
				disabled={currentPage === 1}
			>&lt;</button>
			<Pages 
				pages={pages}
				currentPage={currentPage}
				handleClick={handleClick}
			/>
			<button 
				onClick={nextClick} 
				className={classes.btn}
				disabled={currentPage === pages.length}
			>&gt;</button>
		</ul>
	)
}

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
}