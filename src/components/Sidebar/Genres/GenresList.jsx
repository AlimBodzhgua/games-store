import PropTypes from 'prop-types';
import { GenreItem } from './GenreItem.jsx';

export const GenresList = ({ genres }) => {
	return (
		<ul>
			{genres.map(genre => 
				<GenreItem 
					key={genre.id}
					name={genre.name}
					id={genre.id}
				/>
			)}
		</ul>
	)
}


GenresList.propTypes = {
	genres: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	})).isRequired
}