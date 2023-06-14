import {useState, useEffect} from 'react';
import {useFetching} from 'hooks/useFetching';
import GamesService from 'API/GamesService';
import classes from './sidebar.module.css';
import GenresList from './Genres/GenresList';
import {NavLink} from 'react-router-dom';

export default function Sidebar() {
	const [genres, setGenres] = useState([]);
	const [platforms, setPlatforms] = useState([]);
	const [fetchGenres, genresLoading, genresError] = useFetching(async() => {
		const response = await GamesService.getGenres();
		setGenres(response.results);
	})

	useEffect(() => {
		fetchGenres();
	}, [])

	return (
		<aside className={classes.sidebar}>
			<h2 className={classes.section_title}>Genres</h2>
			{genresLoading 
				?	<h2>loading...</h2>
				:   genres.length && <GenresList genres={genres}/>
			}
		</aside>
	)
}