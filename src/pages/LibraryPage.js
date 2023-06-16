import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Sidebar from 'components/Sidebar/Sidebar.js';
import GameItem from 'components/Games/GameItem.js';
import GamesList from 'components/Games/GamesList.js';


export default function LibraryPage() {
	const { data } = useSelector(state => state.user);

	useEffect(() => {
		console.log(data);
	}, [])


	return (
		<div className='page'>
			<Sidebar />
			<div className='page__details'>
				<h2 style={{fontSize: '34px'}}>My library</h2>
				{data?.library.length
					?   <GamesList games={data.library}/>
					:   <h3>You have no games in library</h3>
				}
			</div>
		</div>
	)
}