import PropTypes from 'prop-types';
//import {NavLink} from 'react-router-dom';
import classes from './genres.module.css';
import {useDispatch} from 'react-redux';
import {setGenreAction} from 'redux/reducers/games/actions.js';

export default function GenreItem({id, name}) {
	const dispatch = useDispatch();
	
	const handleClick = (e, genre) => {
		e.preventDefault();
		dispatch(setGenreAction(genre.toLowerCase()));
	}

	return (
		<li className={classes.item}>
			<button
				onClick={(e) => handleClick(e, name)}
				className={classes.item__link}
			>{name}</button>
		</li>
	)
}

GenreItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
}