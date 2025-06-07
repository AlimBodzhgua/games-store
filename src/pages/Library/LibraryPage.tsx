import { useNavigate } from 'react-router-dom';
import { useAction } from '@/hooks/useAction';
import { UserService } from '@/services/UserService';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { GamesList } from '@/components/Games/GamesList';
import { useAppSelector } from '@/hooks/redux';
import { Button } from '@/components/UI/Button/Button';
import {
	selectUserData,
	selectUserError,
	selectUserIsLoading,
} from '@/redux/reducers/user/selectors';
import BoxIcon from '@/assets/icons/box.svg';
import classnames from 'classnames';
import classes from './library.page.module.css';

export default function LibraryPage() {
	const isLoading = useAppSelector(selectUserIsLoading);
	const error = useAppSelector(selectUserError);
	const data = useAppSelector(selectUserData);
	const { clearLibraryAction } = useAction();
	const navigate = useNavigate();

	const handleClick = () => {
		if (data) {
			clearLibraryAction();
	
			UserService.update(data);
			localStorage.setItem('user', JSON.stringify(data));
		}
	};

	const onFindGames = () => navigate('/');

	return (
		<div className={classnames(classes.page)}>
			<Sidebar />
			<div className={classes.details}>
				<div className={classes.header}>
					<h2 className={classes.title}>My library</h2>
					<Button onClick={handleClick} theme='white' size='sm'>
						Clear Library
					</Button>
				</div>
				{data?.library.length ? (
					<GamesList games={data.library} isLoading={isLoading} error={error}/>
				) : (
					<div className={classes.empty}>
						<BoxIcon className={classes.icon}/>
						<h2 className={classes.emptyTitle}>Empty Library</h2>
						<div className={classes.emptyInfo}>You have no games in your library.<br/>You can add games to your library on the Games page.</div>
						<Button theme='blue' onClick={onFindGames}>Find Games</Button>
					</div>
				)}
			</div>
		</div>
	);
}
