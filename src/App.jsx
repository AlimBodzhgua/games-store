import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isUserLoggedIn } from '@/utils/utils';
import { useAction } from '@/hooks/useAction';
import { UserService } from '@/API/UserService';
import AppRouter from '@/router/AppRouter';
import './App.css';

export const App = () => {
	const { isAuth, data } = useSelector((state) => state.user);
	const { setUserAction, setIsAuthAction } = useAction();

	useEffect(() => {
		if (isUserLoggedIn()) {
			const user = localStorage.getItem('user');
			setUserAction(JSON.parse(user));
			setIsAuthAction(true);
		}
	}, []);

	useEffect(() => {
		if (isAuth) {
			UserService.updateData(data.id, data);
			localStorage.setItem('user', JSON.stringify(data));
		}
	}, [data]);

	return <AppRouter />
};
