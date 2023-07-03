import {useCallback, memo} from 'react';
import {NavLink} from 'react-router-dom';
import {useAction} from 'hooks/useAction';

import {ReactComponent as Home} from 'assets/icons/home.svg';
import {ReactComponent as Library} from 'assets/icons/library.svg';
import {ReactComponent as Profile} from 'assets/icons/profile.svg';
import classes from './sidebar.module.css';

const SidebarHeader = () => {
	const {setGenreAction} = useAction();

	const handleClick = () => {
		setGenreAction(null);
	}

	return (
		<>
			<div className={classes.section_link}>
				<Home className={classes.home__icon}/>
				<h3 onClick={handleClick}><NavLink to="/" className={classes.sidebar__link}>Home</NavLink></h3>
			</div>
			<div className={classes.section_link}>
				<Profile className={classes.library__icon}/>
				<h3><NavLink to="/profile" className={classes.sidebar__link}>My Profile</NavLink></h3>
			</div>
			<div className={classes.section_link}>
				<Library className={classes.library__icon}/>
				<h3><NavLink to="/library" className={classes.sidebar__link}>My Library</NavLink></h3>
			</div>
		</>
	)
}


export default memo(SidebarHeader)