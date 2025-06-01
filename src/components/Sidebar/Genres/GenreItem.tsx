import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAction } from '@/hooks/useAction';
import { useAppSelector } from '@/hooks/redux';
import type { Genre } from '@/types/game';
import classes from './genres.module.css';

interface GenreItemProps {
	genre: Genre;
}

export const GenreItem: FC<GenreItemProps> = (props) => {
	const { id, name } = props.genre;
	const { genre } = useAppSelector((state) => state.games);
	const { setGenreAction } = useAction();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/genre/${name.toLowerCase()}`);
	};

	return (
		<li className={classes.item}>
			<button
				onClick={handleClick}
				className={
					name.toLowerCase() === genre
						? `${classes.item__link} ${classes.active}`
						: classes.item__link
				}
			>
				{name}
			</button>
		</li>
	);
}