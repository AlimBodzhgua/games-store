import { ReactElement } from 'react';

import SteamIcon from '@/assets/icons/stores/steam.svg';
import XboxIcon from '@/assets/icons/stores/xbox.svg';
import GoogleIcon from '@/assets/icons/stores/google.svg';
import PlaystationIcon from '@/assets/icons/stores/playstation.svg';
import EpicgamesIcon from '@/assets/icons/stores/epic-games.svg';
import GogIcon from '@/assets/icons/stores/gog.svg';
import NintendoIcon from '@/assets/icons/stores/nintendo.svg';
import AppStoreIcon from '@/assets/icons/stores/appstore.svg';

import classnames from 'classnames';
import classes from './Stores.module.css';

const storeName = {
	app: 'app', //app store
	steam: 'steam',
	xbox: 'xbox',
	google: 'google',
	playstation: 'playstation',
	epic: 'epic',
	gog: 'gog',
	nintendo: 'nintendo',
} as const;

export type StoreNameType = typeof storeName[keyof typeof storeName];

type StoreData = {
	link: string;
	icon: ReactElement;
}

export const mapToStoreIcon: Record<StoreNameType, StoreData> = {
	steam: {
		icon: <SteamIcon className={classes.storeIcon}/>,
		link: import.meta.env.VITE_STEAM_LINK,
	},
	xbox: {
		icon: <XboxIcon className={classes.storeIcon}/>,
		link: import.meta.env.VITE_XBOX_LINK,
	},
	google: {
		icon: <GoogleIcon className={classnames(classes.storeIcon, classes.googleIcon)}/>,
		link: import.meta.env.VITE_GOOGLE_LINK,
	},
	playstation: {
		icon: <PlaystationIcon className={classes.storeIcon}/>,
		link: import.meta.env.VITE_PLAYSTATION_LINK,
	},
	epic: {
		icon: <EpicgamesIcon className={classes.storeIcon}/>,
		link: import.meta.env.VITE_EPICGAMES_LINK,
	},
	gog: {
		icon: <GogIcon className={classes.storeIcon}/>,
		link: import.meta.env.VITE_GOG_LINK,
	},
	nintendo: {
		icon: <NintendoIcon className={classnames(classes.storeIcon, classes.nintendoIcon)}/>,
		link: import.meta.env.VITE_NINTENDO_LINK,
	},
	app: {
		icon: <AppStoreIcon className={classes.storeIcon}/>,
		link: import.meta.env.VITE_APPSTORE,
	}
};