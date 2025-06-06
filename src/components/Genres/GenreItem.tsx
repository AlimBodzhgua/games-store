import { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectGenre } from '@/redux/reducers/games/selectors';
import { Link } from '@/components/UI/Link/Link';
import type { Genre } from '@/types/game';
import classnames from 'classnames';
import classes from './genres.module.css';

interface GenreItemProps {
	genre: Genre;
	className?: string;
}

export const GenreItem: FC<GenreItemProps> = (props) => {
	const { genre, className } = props;
	const activeGenre = useAppSelector(selectGenre);

	return (
		<li className={classnames(classes.GenreItem, className)}>
			<Link
				to={`/genre/${genre.name.toLowerCase()}`}
				variant='clean'
				className={classnames(classes.link, {
					[classes.active]: genre.name.toLowerCase() === activeGenre,
				})}
			>
				<img src={genre.img} alt={genre.name} className={classes.img} />
				{genre.name}
			</Link>
		</li>
	);
};