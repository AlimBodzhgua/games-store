import {useState, useEffect} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';

import GamesPage from './pages/GamesPage';
import GameDetailsPage from './pages/GameDetailsPage';

import './App.css';

export default function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<GamesPage />}/>
                <Route path='/game/:id' element={<GameDetailsPage />}/>
            </Routes>
        </>
    );
}