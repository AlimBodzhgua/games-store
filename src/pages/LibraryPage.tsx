import { useAction } from '@/hooks/useAction';
import { UserService } from '@/Services/UserService';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { GamesList } from '@/components/Games/GamesList';
import { useAppSelector } from '@/hooks/redux';

import classes from './pages.module.css';

export default function LibraryPage() {
	const { data } = useAppSelector((state) => state.user);
	const { clearLibraryAction } = useAction();

	const handleClick = () => {
		if (data) {
			clearLibraryAction();
	
			UserService.update(data);
			localStorage.setItem('user', JSON.stringify(data));
		}
	};

	return (
		<div className={`${classes.page} ${classes.pageFlex}`}>
			<Sidebar />
			<div className={classes.page__details}>
				<div className={classes.page__header}>
					<h2 className={classes.library__title}>My library</h2>
					<button className={classes.btn} onClick={handleClick}>
						Clear Library
					</button>
				</div>
				{data?.library.length ? (
					<GamesList games={data.library} />
				) : (
					<h3>You have no games in library</h3>
				)}
			</div>
		</div>
	);
}
