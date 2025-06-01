import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useAction } from '@/hooks/useAction';
import { useFetching } from '@/hooks/useFetching';
import { GamesService } from '@/API/GamesService';
import { GenresList } from './Genres/GenresList';
import { SidebarHeader} from './SidebarHeader';

import classes from './sidebar.module.css';

export const Sidebar = () => {
	const [genres, setGenres] = useState([]);
	const { fetching: fetchGenres, isLoading, error } = useFetching(async () => {
		const response = await GamesService.getGenres();
		setGenres(response.results);
	});
	const { setGenreAction } = useAction();

	useEffect(() => {
		fetchGenres();
	}, []);

	return (
		<aside className={classes.sidebar}>
			<SidebarHeader />

			<h2 className={classes.section_title}>Genres</h2>
			{isLoading ? (
				<RotatingLines
					strokeColor='grey'
					strokeWidth='5'
					animationDuration='0.75'
					width='55'
					visible={true}
				/>
			) : (
				genres.length && <GenresList genres={genres} />
			)}
		</aside>
	);
}