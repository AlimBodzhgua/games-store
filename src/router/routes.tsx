import React from 'react';
import { NotFoundPage } from '@/pages/NotFoundPage';

const HomePage = React.lazy(() => import('@/pages/HomePage'));
const GameDetailsPage = React.lazy(() => import('@/pages/GameDetailsPage'));
const LibraryPage = React.lazy(() => import('@/pages/LibraryPage'));
const ProfilePage = React.lazy(() => import('@/pages/ProfilePage'));
const RegisterPage = React.lazy(() => import('@/pages/RegisterPage'));
const LoginPage = React.lazy(() => import('@/pages/LoginPage'));

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
