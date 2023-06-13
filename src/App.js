import {Routes, Route, NavLink} from 'react-router-dom';
import {Provider} from 'react-redux'; 

import GamesPage from 'pages/GamesPage';
import GameDetailsPage from 'pages/GameDetailsPage';
import LibraryPage from 'pages/LibraryPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

import {store} from 'redux/store';

import './App.css';

export default function App() {

    return (
        <>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<GamesPage />}/>
                    <Route path='/game/:id' element={<GameDetailsPage />}/>
                    <Route path='/library' element={<LibraryPage />}/>
                    <Route path='/register' element={<RegisterPage />}/>
                    <Route path='/login' element={<LoginPage />}/>
                </Routes>
            </Provider>
        </>
    );
}