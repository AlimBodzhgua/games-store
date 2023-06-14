import {useState, useEffect} from 'react';
import GamesList from 'components/Games/GamesList.js';
import Sidebar from 'components/Sidebar/Sidebar.js';

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
            {isLoading 
                ? <h2>Loading movies...</h2>
                : <GamesList games={games} />
            }
		</div>
	)
}