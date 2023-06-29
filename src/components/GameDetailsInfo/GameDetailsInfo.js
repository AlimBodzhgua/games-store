import GamePlatformsList from 'components/GamePlatformsList/GamePlatformsList.js';
import MyList from 'components/UI/MyList/MyList.js';
import PropTypes from 'prop-types';

import classes from './game-details-info.module.css';

export default function GameDetailsInfo({image, name, platforms, tags, genres, description}) {
	return (
		<div>
			<div className={classes.info}>
				<img src={image} className={classes.picture} />
				<div className={classes.details}>
					<h3 className={classes.title}>{name}</h3>
					<div className={classes.section}>
						<h4 className={classes.section__title}>Platforms:</h4>
						<GamePlatformsList className={classes.section__info} platforms={platforms}/>
					</div>
					<div className={classes.section}>
						<h4 className={classes.section__title}>Genres:</h4>
						<MyList className={classes.section__info} list={genres}/>	
					</div>
					<div className={classes.section}>
						<h4 className={classes.section__title}>Tags:</h4>
						<MyList className={classes.section__info} list={tags}/>	
					</div>
				</div>
			</div>
			<p className={classes.text}>{description}</p>
		</div>
	)
}

GameDetailsInfo.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	platforms: PropTypes.arrayOf(PropTypes.object).isRequired,
	tags: PropTypes.arrayOf(PropTypes.object).isRequired,
	genres: PropTypes.arrayOf(PropTypes.object).isRequired,
	description: PropTypes.string.isRequired,
}