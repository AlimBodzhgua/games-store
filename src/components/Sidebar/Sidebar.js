import {useState, useEffect} from 'react';
import {useAction} from 'hooks/useAction';
import {useFetching, useFetch} from 'hooks/useFetching';
import {NavLink} from 'react-router-dom';
import {RotatingLines} from 'react-loader-spinner';
import GamesService from 'API/GamesService';
import GenresList from './Genres/GenresList';
import SidebarHeader from './SidebarHeader';

import classes from './sidebar.module.css';


function Sidebar() {
	const [genres, setGenres] = useState([]);
	const [fetchGenres, genresLoading, genresError] = useFetching(async() => {
		const response = await GamesService.getGenres();
		setGenres(response.results);
	})
	const {setGenreAction} = useAction();

	useEffect(() => {
		fetchGenres();
	}, [])

	return (
		<aside className={classes.sidebar}>
			<SidebarHeader />

			<h2 className={classes.section_title}>Genres</h2>
			{genresLoading 
				?	<RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="55"
                            visible={true}
                    />
				:   genres.length && <GenresList genres={genres}/>
			}
		</aside>
	)
}

export default Sidebar;