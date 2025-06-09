import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { GameDetailsInfo } from '@/components/GameDetailsInfo/GameDetailsInfo';
import { GameScreenshotsButton } from '@/components/GameScreenshots/GameScreenshotsButton';
import { useGameDetails } from '@/hooks/useGameDetails';
import { Button } from '@/components/UI/Button/Button';
import ErrorIcon from '@/assets/icons/error.svg';
import classes from './game.page.module.css';

export default function GameDetailsPage() {
	const params = useParams();
	const { gameDetails, isLoading, error } = useGameDetails(params.id ? +params.id : 0);
	
	const onReload = () => location.reload();

	if (error) {
		return (
			<div className={classes.error}>
				<ErrorIcon className={classes.errorIcon}/>
				<h1 className={classes.errorTitle}>500</h1>
				<h1 className={classes.errorTitle}>Oops! Internal Server Error</h1>
				<h3 className={classes.errorSubtitle}>Error fetching data, reload the page or try it later</h3>
				<Button theme='white' onClick={onReload}>reload</Button>
			</div>
		)
	}

	return (
		<div className={classes.GameDetailsPage}>
			<Sidebar />
			<div className={classes.main}>
				{isLoading ? (
					<RotatingLines
						strokeColor='grey'
						strokeWidth='5'
						animationDuration='0.75'
						width='55'
						visible={true}
					/>
				) : (gameDetails && (
					<>
						<GameDetailsInfo game={gameDetails} />
						<GameScreenshotsButton id={gameDetails.id} />
					</>
				))}
			</div>
		</div>
	);
}
