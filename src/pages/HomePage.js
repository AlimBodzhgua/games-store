import {useState, useEffect} from 'react';
import {useAction} from 'hooks/useAction';
import {useSelector} from 'react-redux';
import GamesList from 'components/Games/GamesList';
import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Pagination from 'components/Pagination/Pagination';
import {RotatingLines} from 'react-loader-spinner';
import {capitalizeFirstLetter} from 'utils/utils';
import GamesService from 'API/GamesService'
import UserService from 'API/UserService';
import {useFetching} from 'hooks/useFetching';


export default function GamesPage() {
    const {games, page, genre} = useSelector(state => state.games);
    const [fetchGames, isLoading, error] = useFetching(async() => {
        const response = await GamesService.getGames(page, genre);
        setGamesAction(response.results);
    })

    const {setGamesAction} = useAction();

    useEffect(() => {
        fetchGames();
    }, [page, genre])

	return (
		<div className="page page--flex">
            <Sidebar/>
            <div className="page__home">
                <Header />
                {isLoading 
                    ?   <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="55"
                            visible={true}
                        />
                    :   <>
                            {genre && 
                                <h2 className="page__title">
                                    {capitalizeFirstLetter(genre)} Games
                                </h2>
                            }
                            <GamesList games={games} />
                            <Pagination />
                        </>
                }
            </div>
		</div>
	)
}