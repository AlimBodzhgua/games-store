import PropTypes from 'prop-types';
import classes from './platforms-icon.module.css';

const excludedIcon = [
	'dreamcast', 
	'commodore',
	'gamecube',
	'genesis',
	'sega',
	'classic', 
	'game',
	'snes', 
	'3do',
	'wii', 
	'psp',
];

export default function PlatformsIconItem({icon}) {
	return (
		<>
			{!excludedIcon.includes(icon) &&
				<li className={classes.icon}>
		        		{/* <img src={require(`@/assets/icons/${icon}_icon.svg`)} /> */}
		    	</li>
			}
    	</>
	)
}

PlatformsIconItem.propTypes = {
	icon: PropTypes.string.isRequired,
}