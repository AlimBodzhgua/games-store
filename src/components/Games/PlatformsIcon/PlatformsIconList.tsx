import { FC } from 'react';
import { PlatformsIconItem } from './PlatformsIconItem.js';
import classes from './platforms-icon.module.css';

interface PlatformsIconListProps {
	platformsIcon: string[]
}

export const PlatformsIconList: FC<PlatformsIconListProps> = (props) => {
	const { platformsIcon } = props;

	return (
		<ul className={classes.list}>
			{platformsIcon.map((iconName) => (
				<PlatformsIconItem key={iconName} icon={iconName} />
			))}
		</ul>
	);
}