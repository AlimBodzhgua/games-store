import SearchBar from 'components/SearchBar/SearchBar.js';
import UserActions from 'components/UserActions/UserActions.js';

import classes from './header.module.css';

export default function Header() {
	return (
		<div className={classes.header}>
			<SearchBar />
			<UserActions />
		</div>
	)
}