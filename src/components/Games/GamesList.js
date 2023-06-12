import PropTypes from 'prop-types';
import GameItem from './GameItem.js';
import classes from './games.module.css';

export default function GamesList({games}) {
	return (
		<ul className={classes.games__list}>
            {games.map(game => 
                <GameItem key={game.id} game={game} />
            )}
        </ul>
	)
}

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
}
