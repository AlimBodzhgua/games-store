import { useEffect } from 'react';
import { useAction } from '@/hooks/useAction';
import { useParams } from 'react-router-dom';
import { GamesService } from '@/API/GamesService';
import { GamesList } from '@/components/Games/GamesList';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Header } from '@/components/Header/Header';
import { Pagination } from '@/components/Pagination/Pagination';
import { RotatingLines } from 'react-loader-spinner';
import { capitalizeFirstLetter } from '@/utils/utils';
import { useFetching } from '@/hooks/useFetching';
import { useAppSelector } from '@/hooks/redux';

import classes from './pages.module.css';

export default function HomePage() {
	const { games, page, genre } = useAppSelector((state) => state.games);
	const { fetching: fetchGames, isLoading, error } = useFetching(async () => {
		const genreName = genre ? genre : undefined;
		const games = await GamesService.getGames(page, genreName);
		setGamesAction(games);
	});
	const params = useParams();

	const { setGamesAction, setGenreAction } = useAction();

	useEffect(() => {
		fetchGames();
	}, [page, genre]);

	useEffect(() => {
		if (params.id) {
			setGenreAction(params.id);
		}
	}, [params]);

	return (
		<div className={`${classes.page} ${classes.pageFlex}`}>
			<Sidebar />
			<div className={classes.page__home}>
				<Header />
				{isLoading ? (
					<RotatingLines
						strokeColor='grey'
						strokeWidth='5'
						animationDuration='0.75'
						width='55'
						visible={true}
					/>
				) : (
					<>
						{genre && (
							<h2 className={classes.page__title}>
								{capitalizeFirstLetter(genre)} Games
							</h2>
						)}
						<GamesList games={games} />
						<Pagination />
					</>
				)}
			</div>
		</div>
	);
}
