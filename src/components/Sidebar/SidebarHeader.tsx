import { NavLink } from 'react-router-dom';
import { useAction } from '@/hooks/useAction';

import HomeIcon from '@/assets/icons/home.svg';
import LibraryIcon from '@/assets/icons/library.svg';
import ProfileIcon from '@/assets/icons/profile.svg';
import classes from './sidebar.module.css';

export const SidebarHeader = () => {
	const { setGenreAction } = useAction();

	const handleClick = () => setGenreAction(null);

	return (
		<>
			<div className={classes.section_link}>
				<HomeIcon className={classes.home__icon} />
				<h3 onClick={handleClick}>
					<NavLink to='/' className={classes.sidebar__link}>
						Home
					</NavLink>
				</h3>
			</div>
			<div className={classes.section_link}>
				<ProfileIcon className={classes.library__icon} />
				<h3>
					<NavLink to='/profile' className={classes.sidebar__link}>
						My Profile
					</NavLink>
				</h3>
			</div>
			<div className={classes.section_link}>
				<LibraryIcon className={classes.library__icon} />
				<h3>
					<NavLink to='/library' className={classes.sidebar__link}>
						My Library
					</NavLink>
				</h3>
			</div>
		</>
	);
}
