import React, {useState, useEffect} from 'react';
import {useFetching} from 'hooks/useFetching';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import GamesService from 'API/GamesService';
import GenresList from './Genres/GenresList';
import classes from './sidebar.module.css';
import {setGenreAction} from 'redux/reducers/games/actions.js';

import {ReactComponent as Home} from 'assets/icons/home.svg';
import {ReactComponent as Library} from 'assets/icons/library.svg';

function Sidebar() {
	const [genres, setGenres] = useState([]);
	const [fetchGenres, genresLoading, genresError] = useFetching(async() => {
		const response = await GamesService.getGenres();
		setGenres(response.results);
	})

	const dispatch = useDispatch();

	useEffect(() => {
		fetchGenres();
	}, [])

	const handleClick = () => {
		dispatch(setGenreAction(null));
	}

	return (
		<aside className={classes.sidebar}>
			<div className={classes.section_link}>
				<Home className={classes.home__icon}/>
				<h3 onClick={handleClick}><NavLink to="/" className={classes.sidebar__link}>Home</NavLink></h3>
			</div>
			<div className={classes.section_link}>
				<Library className={classes.library__icon}/>
				<h3><NavLink to="/library" className={classes.sidebar__link}>My Library</NavLink></h3>
			</div>

			<h2 className={classes.section_title}>Genres</h2>
			{genresLoading 
				?	<h2>loading...</h2>
				:   genres.length && <GenresList genres={genres}/>
			}
		</aside>
	)
}

export default Sidebar;