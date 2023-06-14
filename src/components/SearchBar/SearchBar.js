import classes from './search-bar.module.css';

export default function SearchBar() {
	return (
		<div className={classes.searchBar}>
			<input 
				className={classes.input} 
				type="text" 
				placeholder="Search"
			/>
		</div>
	)
}