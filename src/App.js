import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import GamesPage from './pages/GamesPage';
import GameInfoPage from './pages/GameInfoPage';

import './App.css';

export default function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<GamesPage />}/>
                <Route path='/game/:id' element={<GameInfoPage />}/>
            </Routes>

            <GamesPage />
        </>
    );
}