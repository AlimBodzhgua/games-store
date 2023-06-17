import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
	}

	return (
		<div className='page'>
			<Sidebar />
			<div className='page__details'>
				<div>
					<h2 style={{fontSize: '34px'}}>My library</h2>
					<button onClick={handleClick}>clear library</button>
				</div>
				{data?.library.length
					?   <GamesList games={data.library}/>
					:   <h3>You have no games in library</h3>
				}
			</div>
		</div>
	)
}