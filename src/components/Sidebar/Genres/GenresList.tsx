import { FC } from 'react';
import { Skeleton } from '@/components/UI/Skeleton/Skeleton.js';
import type { Genre } from '@/types/game.js';
import { GenreItem } from './GenreItem.js';
import classes from './genres.module.css';

interface GenresListProps {
	genres: Array<Genre>;
	isLoading: boolean;
}

export const GenresList: FC<GenresListProps> = (props) => {
	const { genres, isLoading } = props;

	if (isLoading) {
		return (
			<ul className={classes.GenresList}>
				{new Array(18).fill(0).map((_, index) => (
					<Skeleton
						key={index}
						width='120px'
						height='18px'
						radius='5px'
					/>
				))}
			</ul>
		);
	}

	return (
		<ul>
			{genres.map((genre) => (
				<GenreItem key={genre.id} genre={genre} />
			))}
		</ul>
	);
};