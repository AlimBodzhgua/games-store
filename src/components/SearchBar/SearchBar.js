import {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleInputFocus} from 'utils/utils.js';
import {useDebounce} from 'hooks/useDebounce.js';
import {setGamesAction} from 'redux/reducers/games/actions.js';
import GamesService from 'API/GamesService.js';

import classes from './search-bar.module.css';

export default function SearchBar() {
	const { page, games } = useSelector(state => state.games);
	const dispatch = useDispatch();
	const inputRef = useRef(false);

	const [value, setValue] = useState('');
	const debouncedSearch = useDebounce(search, 450)


	useEffect(() => {
		const listener = (e) => toggleInputFocus(e, inputRef)
		window.addEventListener('keydown', listener)

		return () => window.removeEventListener('keydown', listener);
	}, [])

	const onChange = (e) => {
		setValue(e.target.value);
		debouncedSearch(e.target.value);
	}

	function search(search) {
		GamesService.searchGame(search)
			.then(response => dispatch(setGamesAction(response.results)))
	}

	return (
		<div className={classes.searchBar}>
			<input 
				ref={inputRef}
				value={value}
				onChange={onChange}
				className={classes.input} 
				type="text" 
				placeholder="Search"
			/>
			<div className={classes.hotkey}>
				<div className={classes.hotkey__item}>alt</div>
				<span>+</span>
				<div className={classes.hotkey__item}>enter</div>
			</div>
		</div>
	)
}