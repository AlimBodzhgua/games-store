import { FC } from 'react';
import { GamePlatformsList } from '@/components/GamePlatformsList/GamePlatformsList';
import { MyList } from '@/components/UI/MyList/MyList';
import { removeTags } from '@/utils/utils';
import { Link } from '@/components/UI/Link/Link';
import { StoresList } from '@/components/Stores/StoresList';
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
		stores,
		developers,
		publishers,
		metacritic,
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
				<StoresList stores={stores}/>
			</div>
			<p className={classes.text}>{removeTags(description)}</p>

			<div className={classes.meta}>
				<div className={classes.metaItem}>
					<h4 className={classes.metaTitle}>Realese date</h4>
					{game.released}
				</div>

				<div className={classes.metaItem}>
					<h4 className={classes.metaTitle}>Metascore</h4>
					{metacritic}
				</div>

				<div className={classes.metaItem}>
					<h4 className={classes.metaTitle}>Developer</h4>
					{developers.map((developer) => (
						<div>{developer.name}</div>
					))}
				</div>

				<div className={classes.metaItem}>
					<h4 className={classes.metaTitle}>Publisher</h4>
					{publishers.map((publisher) => (
						<div>{publisher.name}</div>
					))}
				</div>
			</div>
			<div className={classes.metaItem}>
				<h4 className={classes.metaTitle}>Website</h4>
				<Link to={game.website}>{game.website}</Link>
			</div>
			
		</div>
	)
}