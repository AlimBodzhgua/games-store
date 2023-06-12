import PlatformsList from 'components/PlatformsList/PlatformsList.js';
import MyList from 'components/MyList/MyList.js';
import PropTypes from 'prop-types';

import classes from './game-details-info.module.css';

export default function GameDetailsInfo({image, name, platforms, tags, genres, description}) {
	return (
		<div>
			<div style={{display: 'flex'}}>
				<img src={image} style={{width: '320px'}} />
				<div>
					<h3>{name}</h3>
					<div style={{display: 'flex'}}>
						<span>Платформы:</span>
						<PlatformsList platforms={platforms}/>
					</div>
					<div style={{display: 'flex'}}>
						<span>Тэги:</span>
						<MyList list={tags}/>
					</div>
					<div style={{display: 'flex'}}>
						<span>Жанр:</span>
						<MyList list={genres}/>	
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