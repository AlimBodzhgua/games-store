import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import UserService from 'API/UserService';
import Sidebar from 'components/Sidebar/Sidebar.js';
import GameItem from 'components/Games/GameItem.js';
import GamesList from 'components/Games/GamesList.js';
import {clearLibraryAction} from 'redux/reducers/user/actions';


export default function LibraryPage() {
	const { data } = useSelector(state => state.user);
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(clearLibraryAction());
		
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