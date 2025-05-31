import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAction } from '@/hooks/useAction';

import classes from './genres.module.css';

export const GenreItem = (props) => {
	const { id, name } = props;
	const { genre } = useSelector((state) => state.games);
	const { setGenreAction } = useAction();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = (e, genre) => {
		e.preventDefault();
		navigate(`/genre/${genre.toLowerCase()}`);
	};

	return (
		<li className={classes.item}>
			<button
				onClick={(e) => handleClick(e, name)}
				className={
					name.toLowerCase() === genre
						? `${classes.item__link} ${classes.active}`
						: classes.item__link
				}
			>
				{name}
			</button>
		</li>
	);
}

GenreItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
};
