import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import classes from './genres.module.css';

export default function GenreItem({id, name}) {
	return (
		<li className={classes.item}>
			<NavLink to='/' className={classes.item__link}>{name}</NavLink>
		</li>
	)
}

GenreItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
}