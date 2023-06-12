import PropTypes from 'prop-types';
import classes from './platforms-list.module.css';

export default function PlatformsList({platforms}) {
	console.log(platforms);
	return (
		<ol className={classes.list}>
			{platforms.map(obj => 
				<li className={classes.listItem} key={obj.platform.id}>{obj.platform.name}</li>
			)}
		</ol>
	)
}

PlatformsList.propTypes = {
	platforms: PropTypes.arrayOf(PropTypes.shape({
		platform: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired
	})).isRequired
}