import React from 'react'
import GenreItem from './GenreItem.js';
import PropTypes from 'prop-types';

export default function GenresList({genres}) {
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