import { FC, ReactElement } from 'react';
import { GamePlatformsList } from '@/components/GamePlatformsList/GamePlatformsList';
import { MyList } from '@/components/UI/MyList/MyList';
import { removeTags } from '@/utils/utils';
import type { GameDetails } from '@/types/game';
import classes from './game-details-info.module.css';
import { Button } from '../UI/Button/Button';
import classnames from 'classnames';
import { StoresList } from '../Stores/StoresList';


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
		stores,
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
			<div className={classes.storeWrapper}>
				<h2>Where to buy: </h2>
				<StoresList stores={game.stores}/>
			</div>
			<p className={classes.text}>{removeTags(description)}</p>
		</div>
	)
}