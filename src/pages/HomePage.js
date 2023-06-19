import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import GamesList from 'components/Games/GamesList.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import Header from 'components/Header/Header.js';
import Pagination from 'components/Pagination/Pagination.js';
import {RotatingLines} from 'react-loader-spinner';

import GamesService from 'API/GamesService'
import {useFetching} from 'hooks/useFetching';
import {setGamesAction} from 'redux/reducers/games/actions.js';


export default function GamesPage() {
    const dispatch = useDispatch();
    const {games, page, genre} = useSelector(state => state.games);
    const [fetchGames, isLoading, error] = useFetching(async() => {
        const response = await GamesService.getGames(page, genre);
        dispatch(setGamesAction(response.results))
    })

    useEffect(() => {
        fetchGames();
    }, [page, genre])

	return (
		<div className="page">
            <Sidebar/>
            <div style={{display: 'flex', flexDirection: 'column', width: '85%'}}>
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
                            <GamesList games={games} />
                            <Pagination />
                        </>
                }
            </div>
		</div>
	)
}