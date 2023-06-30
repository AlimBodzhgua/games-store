import React from 'react';

const HomePage = React.lazy(() => import('pages/HomePage'));
const GameDetailsPage = React.lazy(() => import('pages/GameDetailsPage'));
const LibraryPage = React.lazy(() => import('pages/LibraryPage'));
const RegisterPage = React.lazy(() => import('pages/RegisterPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));


export const routes = [
	{path: '', component: <HomePage />},
	{path: '/game/:id', component: <GameDetailsPage />},
	{path: '/library', component: <LibraryPage />},
	{path: '*', component: <NotFoundPage />},
]

export const authRoutes = [
	{path: '/login', component: <LoginPage />},
	{path: '/register', component: <RegisterPage />},
]