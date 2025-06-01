import { FC } from 'react';
import type { Platform } from '@/types/game';
import classes from './game-platforms-list.module.css';

interface GamePlatformsListPrpos {
	platforms: Platform[];
}

export const GamePlatformsList: FC<GamePlatformsListPrpos> = (props) => {
	const { platforms } = props;

	return (
		<ol className={classes.list}>
			{platforms.map((platform) => (
				<li className={classes.listItem} key={platform.id}>
					{platform.name}
				</li>
			))}
		</ol>
	);
};