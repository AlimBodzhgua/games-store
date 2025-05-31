import PropTypes from 'prop-types';
import classes from './pagination.module.css';

export const Pages = ({pages, currentPage, handleClick}) => {
	return (
		<>
			{pages.map((page, index) => 
				<li 
					className={page === currentPage ? `${classes.item} ${classes.active}` : classes.item}
					key={index}
					onClick={() => handleClick(page)}
				>{page}</li>
			)}
		</>
	)
}

Pages.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.number).isRequired,
	currentPage: PropTypes.number.isRequired,
	handleClick: PropTypes.func.isRequired,
}