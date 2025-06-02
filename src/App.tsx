import { useEffect } from 'react';
import { isUserLoggedIn } from '@/utils/utils';
import { useAction } from '@/hooks/useAction';
import { UserService } from '@/Services/UserService';
import { USER_LOCALSTORAGE_KEY } from '@/constants/localsrorage';
import { AppRouter } from '@/router/AppRouter';
import { useAppSelector } from './hooks/redux';
import { User } from './types/user';
import './App.css';

export const App = () => {
	const { isAuth, data } = useAppSelector((state) => state.user);
	const { setUserAction, setIsAuthAction } = useAction();

	useEffect(() => {
		if (isUserLoggedIn()) {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
			setUserAction(user ? JSON.parse(user) as User : null);
			setIsAuthAction(true);
		}
	}, []);

	useEffect(() => {
		if (isAuth && data) {
			UserService.update(data);
			localStorage.setItem('user', JSON.stringify(data));
		}
	}, [data]);

	return <AppRouter />
};
