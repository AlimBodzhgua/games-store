import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
import type { Genre } from '@/types/game';
import classnames from 'classnames';
import classes from './genres.module.css';

interface GenreItemProps {
	genre: Genre;
}

export const GenreItem: FC<GenreItemProps> = (props) => {
	const { name } = props.genre;
	const { genre } = useAppSelector((state) => state.games);
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/genre/${name.toLowerCase()}`);
	};

	return (
		<li className={classes.item}>
			<button
				onClick={handleClick}
				className={classnames(classes.item__link, {[classes.active]: name.toLowerCase() === genre})}
			>
				{name}
			</button>
		</li>
	);
}