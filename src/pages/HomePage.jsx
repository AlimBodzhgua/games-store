import { useEffect } from 'react';
import { useAction } from '@/hooks/useAction';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GamesService } from '@/API/GamesService';
import { GamesList } from '@/components/Games/GamesList';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Header } from '@/components/Header/Header';
import { Pagination } from '@/components/Pagination/Pagination';
import { RotatingLines } from 'react-loader-spinner';
import { capitalizeFirstLetter } from '@/utils/utils';
import { useFetching } from '@/hooks/useFetching';

import classes from './pages.module.css';

export default function HomePage() {
	const { games, page, genre } = useSelector((state) => state.games);
	const [fetchGames, isLoading, error] = useFetching(async () => {
		const response = await GamesService.getGames(page, genre);
		setGamesAction(response.results);
	});
	const params = useParams();

	const { setGamesAction, setGenreAction } = useAction();

	useEffect(() => {
		fetchGames();
	}, [page, genre]);

	useEffect(() => {
		if (params) {
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
