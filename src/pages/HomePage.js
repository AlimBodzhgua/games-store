import {useState, useEffect} from 'react';
import GamesList from 'components/Games/GamesList.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import Header from 'components/Header/Header.js';

import GamesService from 'API/GamesService'
import {useFetching} from 'hooks/useFetching';

export default function GamesPage() {
	const [games, setGames] = useState([]);
    const [fetchGames, error, isLoading] = useFetching(async() => {
        const response = await GamesService.getGames()
        setGames(response.results);
    })

    useEffect(() => {
        fetchGames();
    }, [])

	return (
		<div className="page">
            <Sidebar />
            <div style={{display: 'flex', flexDirection: 'column', width: '85%'}}>
                <Header />
                {isLoading 
                    ? <h2>Loading movies...</h2>
                    : <GamesList games={games} />
                }
            </div>
		</div>
	)
}