import { FC, memo, useState, useEffect } from 'react';
import { GenresList } from '@/components/Genres/GenresList'
import { SidebarHeader} from './SidebarHeader';

import classes from './sidebar.module.css';

export const Sidebar: FC = memo(() => {

	return (
		<aside className={classes.sidebar}>
			<SidebarHeader />

			<h2 className={classes.title}>Genres</h2>
			<GenresList/>
		</aside>
	);
});