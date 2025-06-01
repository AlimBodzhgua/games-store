import { FC } from 'react';
import { GamePlatformsList } from '@/components/GamePlatformsList/GamePlatformsList';
import { MyList } from '@/components/UI/MyList/MyList';
import { removeTags } from '@/utils/utils';
import type { GameDetails } from '@/types/game';
import classes from './game-details-info.module.css';

interface GameDetailsInfoProps {
	game: GameDetails;
}

export const GameDetailsInfo: FC<GameDetailsInfoProps> = ({ game }) => {
	const {
		background_image,
		name,
		platforms,
		tags,
		genres,
		description,
	} = game;

	return (
		<div>
			<div className={classes.info}>
				<img src={background_image} className={classes.picture} />
				<div className={classes.details}>
					<h3 className={classes.title}>{name}</h3>
					<div className={classes.section}>
						<h4 className={classes.section__title}>Platforms:</h4>
						<GamePlatformsList platforms={platforms}/>
					</div>
					<div className={classes.section}>
						<h4 className={classes.section__title}>Genres:</h4>
						<MyList list={genres}/>
					</div>
					<div className={classes.section}>
						<h4 className={classes.section__title}>Tags:</h4>
						<MyList list={tags}/>
					</div>
				</div>
			</div>
			<p className={classes.text}>{removeTags(description)}</p>
		</div>
	)
}