import { FC, memo } from 'react';
import { useAction } from '@/hooks/useAction';
import { sidebarHeaderList } from './sidebarList';
import { Link } from '../UI/Link/Link';
import classes from './sidebar.module.css';


export const SidebarHeader: FC = memo(() => {
	const { setGenreAction } = useAction();

	const handleClick = () => setGenreAction(null);

	return sidebarHeaderList.map((item) => (
		<Link to='/' onClick={handleClick} className={classes.link}>
			<item.Icon className={classes.icon}/>
			{item.title}
		</Link>
	));
});
