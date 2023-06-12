import PropTypes from 'prop-types';
import classes from './platforms-icon.module.css';

export default function PlatformsIconItem({icon}) {
	return (
		<li className={classes.icon}>
        	<img src={require(`assets/icons/${icon}_icon.svg`)} />
    	</li>
	)
}

PlatformsIconItem.propTypes = {
	icon: PropTypes.string.isRequired,
}