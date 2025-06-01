import { SearchBar } from '@/components/SearchBar/SearchBar';
import { UserActions } from '@/components/UserActions/UserActions';

import classes from './header.module.css';

export const Header = () => {
	return (
		<div className={classes.header}>
			<SearchBar />
			<UserActions />
		</div>
	)
}