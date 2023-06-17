import React, {useEffect, Suspense} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux'; 
import {isUserLoggedIn} from 'utils/utils.js';
import {setUserAction, setIsAuthAction} from 'redux/reducers/user/actions.js';
import './App.css';

const GamesPage = React.lazy(() => import('pages/GamesPage'));
const GameDetailsPage = React.lazy(() => import('pages/GameDetailsPage'));
const LibraryPage = React.lazy(() => import('pages/LibraryPage'));
const RegisterPage = React.lazy(() => import('pages/RegisterPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));


export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserLoggedIn()) {
            const user = localStorage.getItem('user');
            dispatch(setUserAction(JSON.parse(user)));
            dispatch(setIsAuthAction(true));
        }
    }, [])

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<GamesPage />}/>
                    <Route path='/game/:id' element={<GameDetailsPage />}/>
                    <Route path='/library' element={<LibraryPage />}/>
                    <Route path='/register' element={<RegisterPage />}/>
                    <Route path='/login' element={<LoginPage />}/>
                </Routes>
            </Suspense>
        </>
    );
}