import { FC, memo } from 'react';
import { useAction } from '@/hooks/useAction';
import { Link } from '@/components/UI/Link/Link';
import { sidebarHeaderList } from './sidebarList';
import classes from './sidebar.module.css';


export const SidebarHeader: FC = memo(() => {
	const { setGenreAction } = useAction();

	const handleClick = () => setGenreAction(null);

	return sidebarHeaderList.map((item) => (
		<Link
			to={item.path}
			onClick={handleClick}
			className={classes.link}
			key={item.path}
		>
			<item.Icon className={classes.icon}/>
			{item.title}
		</Link>
	));
});
