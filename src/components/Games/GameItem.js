import {useState, useEffect} from 'react';
import {NavLink, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addGameAction, removeGameAction} from 'redux/reducers/user/actions';
import PropTypes from 'prop-types';
import PlatformsIconList from './PlatformsIcon/PlatformsIconList.js';
import defaultImage from 'assets/default-image.jpg';

import classes from './games.module.css';

function GameItem({game}) {
	const [platformsIcon, setPlatformsIcon] = useState([]);

	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (game.platforms) {
			const platforms = new Set();
			game.platforms.forEach(obj => {
				const name = obj.platform.name.split(' ')[0].toLowerCase();
				platforms.add(name);
			})
			setPlatformsIcon([...platforms])
		}
	}, [])

	const handleClick = () => {
		navigate('/game/' + game.id);
	}

	const addGame = (e) => {
		e.stopPropagation();
		const add = {
			id: game.id, 
			name: game.name,
			released: game.released,
			metacritic: game.metacritic,
			background_image: game.background_image,
			platforms: game.platforms,
		}
		dispatch(addGameAction(add));
	}

	const removeGame = (e) => {
		e.stopPropagation();
		dispatch(removeGameAction(game.id));
	}

	return (
		<li onClick={handleClick} className={classes.item}>
        	<img src=
        		{game.background_image 
	        		? game.background_image
	        		: defaultImage
        		} 
        		className={classes.logo}
        	/>
            <div className={classes.info}>
            	{platformsIcon.length > 0 && 
            		<PlatformsIconList platformsIcon={platformsIcon}/>
            	}
            	<h3 className={classes.title}>{game.name}</h3>
            	<div className={classes.date}>Release: {game.released}</div>
            	{game.metacritic &&
            		<div className={classes.metacritic}>{game.metacritic}</div>
            	}
            </div>
            {location.pathname === '/' &&
            	<button className={classes.add} onClick={addGame}>+</button>
            	/*<button className={classes.add} onClick={addGame}>&#x2714;</button>*/
        	}
        	{location.pathname === '/library' &&
        		<button className={classes.add} onClick={removeGame}>-</button>
        	}
        </li>
	)
}

GameItem.propTypes = {
	game: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		released: PropTypes.string.isRequired,	
		background_image: PropTypes.string,	
	}).isRequired
}

export default GameItem;