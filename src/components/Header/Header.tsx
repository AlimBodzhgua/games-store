import { SearchBar } from '@/components/SearchBar/SearchBar';
import { UserAuthActions } from '@/components/Auth';

import classes from './header.module.css';

export const Header = () => {
	return (
		<div className={classes.header}>
			<SearchBar />
			<UserAuthActions />
		</div>
	)
}