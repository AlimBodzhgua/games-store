import { FC, memo } from 'react';
import { Link } from '@/components/UI/Link/Link';
import type { Genre } from '@/types/game';
import classnames from 'classnames';
import classes from './GameItemGenresList.module.css';

interface GameItemGenresListProps {
	genres: Genre[];
	className?: string;
}

export const GameItemGenresList: FC<GameItemGenresListProps> = memo((props) => {
	const { genres, className } = props;

	return (
		<ul className={classnames(classes.GameItemGenresList, className)}>
			{genres.map((genre, index) => (
				<li key={genre.id}>
					<Link to={`/genres/${genre.name}`} size='sm'>{genre.name}</Link>
					{(index < genres.length && index != genres.length - 1)  && ', '}
				</li>
			))}
		</ul>
	);
});