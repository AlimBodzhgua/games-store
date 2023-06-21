import {useState, useEffect, useCallback} from 'react';
import {NavLink, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addGameAction, removeGameAction} from 'redux/reducers/user/actions';
import {getFirstWord} from 'utils/utils.js';
import PropTypes from 'prop-types';
import PlatformsIconList from './PlatformsIcon/PlatformsIconList.js';
import defaultImage from 'assets/default-image.jpg';

import classes from './games.module.css';

function GameItem({game}) {
	const [platformsIcon, setPlatformsIcon] = useState([]);
	const {isAuth, data} = useSelector(state => state.user);

	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const isInLibrary = (checkGame) => {
		let inLibrary = false
		data.library.forEach(g => {
			if (g.id === checkGame.id) { 
				inLibrary = true
			}
		})
		return inLibrary;
	}
	
	useEffect(() => {
		if (game.platforms) {
			const platforms = new Set();
			game.platforms.forEach(obj => {
				const name = getFirstWord(obj.platform.name);
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
		if (!isAuth) {
			return alert('You should register or login in account');
		}
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
            	<div className={classes.date}>Released: {game.released}</div>
            	{game.metacritic &&
            		<div className={classes.metacritic}>{game.metacritic}</div>
            	}
            </div>
            {location.pathname === '/' &&
            	<>
            		{isInLibrary(game) 
		            	? <button className={classes.add} disabled>&#x2714;</button>
		            	: <button className={classes.add} onClick={addGame}>+</button>
            		}
            	</>
            	
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