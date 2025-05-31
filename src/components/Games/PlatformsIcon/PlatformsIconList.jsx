import PropTypes from 'prop-types';
import PlatformsIconItem from './PlatformsIconItem.jsx';

import classes from './platforms-icon.module.css';

export const PlatformsIconList = ({platformsIcon}) => {
	return (
		<ul className={classes.list}> 
    		{platformsIcon.map(iconName => 
    			<PlatformsIconItem 
    				key={iconName}
    				icon={iconName}
    			/>
    		)}
		</ul>
	)
}

PlatformsIconList.propTypes = {
	platformsIcon: PropTypes.arrayOf(PropTypes.string).isRequired
}