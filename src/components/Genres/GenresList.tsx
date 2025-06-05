import { FC } from 'react';
import classnames from 'classnames';
import { GenreItem } from './GenreItem.js';
import { genres } from './genres.js';
import classes from './genres.module.css';

interface GenresListProps {
	className?: string;
}

export const GenresList: FC<GenresListProps> = (props) => {
	const { className } = props;

	return (
		<ul className={classnames(classes.GenresList, className)}>
			{genres.map((genre) => (
				<GenreItem key={genre.id} genre={genre} />
			))}
		</ul>
	);
};