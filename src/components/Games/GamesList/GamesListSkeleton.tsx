import { FC, memo } from 'react';
import { Skeleton } from '@/components/UI/Skeleton/Skeleton';
import classnames from 'classnames';
import classes from './GameList.module.css';

interface GamesListSkeletonProps {
	className?: string;
}

export const GamesListSkeleton: FC<GamesListSkeletonProps> = memo((props) => {
	const { className } = props;

	return (
		<ul className={classes.GamesList}>
			{Array(15).fill(0).map((_, index) => (
				<li key={index} className={classnames(classes.LoadingGamesItem, className)}>
					<Skeleton width='100%' height='215px' />
					<div className={classes.loadingInfo}>
						<div className={classes.loadingIcons}>
							<div className={classes.loadingPlatforms}>
								<Skeleton width='30px' height='25px'/>
								<Skeleton width='30px' height='25px'/>
								<Skeleton width='30px' height='25px'/>
								<Skeleton width='30px' height='25px'/>
							</div>
							<Skeleton width='30px' height='25px'/>
						</div>
						<Skeleton width='250px' height='30px' className={classes.loadingTitle}/>
						<Skeleton width='150px' height='15px' />
					</div>
				</li>
			))}
		</ul>
	)
})