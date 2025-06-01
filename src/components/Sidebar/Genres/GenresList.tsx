import { GenreItem } from './GenreItem.js';
import { FC } from 'react';
import { Genre } from '@/types/game.js';

interface GenresListProps {
	genres: Array<Genre>
}

export const GenresList: FC<GenresListProps> = (props) => {
	const { genres } = props;

	return (
		<ul>
			{genres.map((genre) => (
				<GenreItem key={genre.id} genre={genre} />
			))}
		</ul>
	);
};