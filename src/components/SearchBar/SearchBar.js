import {useState, useEffect, useRef} from 'react';
import classes from './search-bar.module.css';
import {toggleInputFocus} from 'utils/utils.js';

export default function SearchBar() {
	const [value, setValue] = useState('');
	const inputRef = useRef(false);

	useEffect(() => {
		const listener = (e) => toggleInputFocus(e, inputRef)
		window.addEventListener('keydown', listener)

		return () => window.removeEventListener('keydown', listener);
	}, [])


	return (
		<div className={classes.searchBar}>
			<input 
				ref={inputRef}
				value={value}
				onChange={(e) => setValue(e.target.value)}
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