import React from 'react';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';

const HomePage = React.lazy(() => import('@/pages/Home/HomePage'));
const GameDetailsPage = React.lazy(() => import('@/pages/GameDetails/GameDetailsPage'));
const LibraryPage = React.lazy(() => import('@/pages/Library/LibraryPage'));
const ProfilePage = React.lazy(() => import('@/pages/Profile/ProfilePage'));
const RegisterPage = React.lazy(() => import('@/pages/Register/RegisterPage'));
const LoginPage = React.lazy(() => import('@/pages/Login/LoginPage'));

export const routes = [
	{ path: '', component: <HomePage /> },
	{ path: '/genre/:id', component: <HomePage /> },
	{ path: '/game/:id', component: <GameDetailsPage /> },
	{ path: '/profile', component: <ProfilePage /> },
	{ path: '/library', component: <LibraryPage /> },
	{ path: '*', component: <NotFoundPage /> },
];

export const authRoutes = [
	{ path: '/login', component: <LoginPage /> },
	{ path: '/register', component: <RegisterPage /> },
];
