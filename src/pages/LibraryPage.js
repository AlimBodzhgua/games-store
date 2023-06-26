import {useEffect, useState} from 'react';
import {useAction} from 'hooks/useAction';
import {useSelector} from 'react-redux';
import UserService from 'API/UserService';
import Sidebar from 'components/Sidebar/Sidebar';
import GameItem from 'components/Games/GameItem';
import GamesList from 'components/Games/GamesList';


export default function LibraryPage() {
	const { data } = useSelector(state => state.user);
	const {clearLibraryAction} = useAction();

	const handleClick = (e) => {
		e.preventDefault();
		clearLibraryAction();
		
        UserService.updateLibrary(data.id, data.library);
        localStorage.setItem('user', JSON.stringify(data));
	}

	return (
		<div className='page'>
			<Sidebar />
			<div className='page__details'>
				<div className='library__header'>
					<h2 style={{fontSize: '38px'}}>My library</h2>
					<button 
						className='library__clear' 
						onClick={handleClick}
					>Clear Library</button>
				</div>
				{data?.library.length
					?   <GamesList games={data.library}/>
					:   <h3>You have no games in library</h3>
				}
			</div>
		</div>
	)
}