import PropTypes from 'prop-types';
import classes from './game-item.module.css';
import {NavLink, useNavigate} from 'react-router-dom';

function GameItem({game}) {
	const navigate = useNavigate();

	const handleClick = () => {
		console.log(game.id);
	}

	return (
		<li onClick={handleClick} className={classes.gameItem}>
            <img src={game.background_image} className={classes.gameItemLogo}/>
            <div className={classes.gameItemInfo}>
            	<h3 className={classes.gameItemTitle}>{game.name}</h3>
            </div>
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