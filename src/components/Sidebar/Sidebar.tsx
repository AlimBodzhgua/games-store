import { useState, useEffect } from 'react';
import { useFetching } from '@/hooks/useFetching';
import { GamesService } from '@/Services/GamesService';
import { GenresList } from './Genres/GenresList';
import { SidebarHeader} from './SidebarHeader';

import classes from './sidebar.module.css';

export const Sidebar = () => {
	const [genres, setGenres] = useState([]);
	const { fetching: fetchGenres, isLoading, error } = useFetching(async () => {
		const response = await GamesService.getGenres();
		setGenres(response.results);
	});

	useEffect(() => {
		fetchGenres();
	}, []);

	return (
		<aside className={classes.sidebar}>
			<SidebarHeader />

			<h2 className={classes.section_title}>Genres</h2>
			<GenresList genres={genres} isLoading={isLoading}/>
		</aside>
	);
}