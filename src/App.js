import {useEffect} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux'; 

import GamesPage from 'pages/GamesPage';
import GameDetailsPage from 'pages/GameDetailsPage';
import LibraryPage from 'pages/LibraryPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

import {isUserLoggedIn} from 'utils/utils.js';
import {setUserAction, setIsAuthAction} from 'redux/reducers/user/actions.js';
import './App.css';



export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserLoggedIn()) {
            const user = localStorage.getItem('user');
            dispatch(setUserAction(user));
            dispatch(setIsAuthAction(true));
        } else {
            console.log('User not logged in');
        }
    }, [])

    return (
        <>
            <Routes>
                <Route path='/' element={<GamesPage />}/>
                <Route path='/game/:id' element={<GameDetailsPage />}/>
                <Route path='/library' element={<LibraryPage />}/>
                <Route path='/register' element={<RegisterPage />}/>
                <Route path='/login' element={<LoginPage />}/>
            </Routes>
        </>
    );
}