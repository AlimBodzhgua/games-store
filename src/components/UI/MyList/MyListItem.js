import classes from './my-list.module.css';
import PropTypes from 'prop-types';

export default function MyListItem({name}) {
	return (
		<li className={classes.listItem}>{name}</li>
	)
}

MyListItem.propTypes = {
	name: PropTypes.string.isRequired
}