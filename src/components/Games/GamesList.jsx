import PropTypes from 'prop-types';
import { GameItem } from './GameItem';
import classes from './games.module.css';

export const GamesList = ({games}) => {
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
