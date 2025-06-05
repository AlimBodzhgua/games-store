import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Genre } from '@/types/game';
import classnames from 'classnames';
import classes from './genres.module.css';

interface GenreItemProps {
	genre: Genre;
}

export const GenreItem: FC<GenreItemProps> = (props) => {
	const { genre } = props;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/genre/${genre.name.toLowerCase()}`);
	};

	return (
		<li className={classes.item}>
			<button
				onClick={handleClick}
				className={classnames(classes.item__link, {
					[classes.active]: genre.name.toLowerCase() === genre.name,
				})}
			>
				{genre.name}
			</button>
		</li>
	);
};