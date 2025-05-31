import PropTypes from 'prop-types';
import classes from './game-platforms-list.module.css';

export const GamePlatformsList = ({platforms}) => {
	return (
		<ol className={classes.list}>
			{platforms.map(obj => 
				<li className={classes.listItem} key={obj.platform.id}>{obj.platform.name}</li>
			)}
		</ol>
	)
}

GamePlatformsList.propTypes = {
	platforms: PropTypes.arrayOf(PropTypes.shape({
		platform: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired
	})).isRequired
}