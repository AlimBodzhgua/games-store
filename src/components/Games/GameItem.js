import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classes from './games.module.css';
import {NavLink, useNavigate} from 'react-router-dom';
import PlatformsIconList from './PlatformsIcon/PlatformsIconList.js';

function GameItem({game}) {
	const navigate = useNavigate();
	const [platformsIcon, setPlatformsIcon] = useState([]);


	useEffect(() => {
		const platforms = new Set();
		game.platforms.forEach(obj => {
			const name = obj.platform.name.split(' ')[0].toLowerCase();
			platforms.add(name);
		})
		setPlatformsIcon([...platforms])
	}, [])

	const handleClick = () => {
		navigate('/game/' + game.id);
	}

	const addGame = (e) => {
		e.stopPropagation();
		console.log('add');
	}

	return (
		<li onClick={handleClick} className={classes.item}>
            <img src={game.background_image} className={classes.logo}/>
            <div className={classes.info}>
            	{platformsIcon.length > 0 && 
            		<PlatformsIconList platformsIcon={platformsIcon}/>
            	}
            	<h3 className={classes.title}>{game.name}</h3>
            	<div className={classes.metacritic}>{game.metacritic}</div>
            </div>
            <button className={classes.add} onClick={addGame}>+</button>
        </li>
	)
}

GameItem.propTypes = {
	game: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		background_image: PropTypes.string.isRequired,		
	}).isRequired
}

export default GameItem;