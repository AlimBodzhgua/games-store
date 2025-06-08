import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAction } from '@/hooks/useAction';
import { GamesList } from '@/components/Games';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Header } from '@/components/Header/Header';
import { Pagination } from '@/components/Pagination/Pagination';
import { capitalizeFirstLetter } from '@/utils/utils';
import { useAppSelector } from '@/hooks/redux';
import { useGames } from '@/hooks/useGames';

import classes from './home.page.module.css';

export default function HomePage() {
	const { genre } = useAppSelector((state) => state.games);
	const { games, isLoading, error } = useGames();
	const params = useParams();

	const { setGenreAction } = useAction();

	useEffect(() => {
		if (params.id) {
			setGenreAction(params.id);
		}
	}, [params]);

	return (
		<div className={classes.HomePage}>
			<Sidebar />
			<div className={classes.main}>
				<Header />
				{genre && (
					<h2 className={classes.title}>
						{capitalizeFirstLetter(genre)} Games
					</h2>
				)}
				<GamesList games={games} isLoading={isLoading} error={error}/>
				<Pagination />
			</div>
		</div>
	);
}
