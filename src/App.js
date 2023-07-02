import {useEffect} from 'react';
import {useSelector} from 'react-redux'; 
import {isUserLoggedIn} from 'utils/utils.js';
import {useAction} from 'hooks/useAction';
import AppRouter from 'router/AppRouter.js';
import UserService from 'API/UserService';
import './App.css';


export default function App() {
    const {isAuth, data} = useSelector(state => state.user);
    const {setUserAction, setIsAuthAction} = useAction();

    useEffect(() => {
        if (isUserLoggedIn()) {
            const user = localStorage.getItem('user');
            setUserAction(JSON.parse(user));
            setIsAuthAction(true);
        }
    }, [])

    useEffect(() => {
        if (isAuth) {
            UserService.updateData(data.id, data);
            localStorage.setItem('user', JSON.stringify(data));
            console.log('updated');
        }
    }, [data])

    return (
        <>
            <AppRouter />
        </>
    );
}