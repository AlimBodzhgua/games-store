import { FC } from 'react';
import classes from './platforms-icon.module.css';

const excludedIcon = [
	'dreamcast', 
	'commodore',
	'gamecube',
	'genesis',
	'sega',
	'classic', 
	'game',
	'snes', 
	'3do',
	'wii', 
	'psp',
];

interface PlatformsIconItemProps {
	icon: string;
}

export const PlatformsIconItem: FC<PlatformsIconItemProps> = (props) => {
	const { icon } = props;
	// @ts-ignore
	const imgUrl = new URL(`../../../assets/platforms/icons/${icon}_icon.svg`, import.meta.url).href

	return (
		!excludedIcon.includes(icon) && (
			<li className={classes.icon}>
				<img src={imgUrl} />
			</li>
		)
	);
}