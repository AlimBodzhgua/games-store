import React, {useEffect, Suspense} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'; 
import {isUserLoggedIn} from 'utils/utils.js';
import {setUserAction, setIsAuthAction} from 'redux/reducers/user/actions.js';
import {RotatingLines} from 'react-loader-spinner';
import UserService from 'API/UserService';
import './App.css';

const HomePage = React.lazy(() => import('pages/HomePage'));
const GameDetailsPage = React.lazy(() => import('pages/GameDetailsPage'));
const LibraryPage = React.lazy(() => import('pages/LibraryPage'));
const RegisterPage = React.lazy(() => import('pages/RegisterPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));


export default function App() {
    const {isAuth, data} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserLoggedIn()) {
            const user = localStorage.getItem('user');
            dispatch(setUserAction(JSON.parse(user)));
            dispatch(setIsAuthAction(true));
        }
    }, [])

    useEffect(() => {
        if (isAuth) {
            UserService.updateLibrary(data.id, data.library);
            localStorage.setItem('user', JSON.stringify(data));
        }
    }, [data])

    return (
        <>
            <Suspense 
                fallback={<RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="55"
                    visible={true}
                />}
            >
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/game/:id' element={<GameDetailsPage />}/>
                    <Route path='/library' element={<LibraryPage />}/>
                    <Route path='/register' element={<RegisterPage />}/>
                    <Route path='/login' element={<LoginPage />}/>
                </Routes>
            </Suspense>
        </>
    );
}