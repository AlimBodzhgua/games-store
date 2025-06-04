import { ReactElement, SVGProps } from 'react';
import LibraryIcon from '@/assets/icons/library.svg';
import ProfileIcon from '@/assets/icons/profile.svg';
import HomeIcon from '@/assets/icons/home.svg';

type SidebarHeaderItem = {
	Icon: (props: SVGProps<SVGElement>) => ReactElement;
	path: string;
	title: string;
};

export const sidebarHeaderList: SidebarHeaderItem[] = [
	{
		Icon: HomeIcon,
		path: '/',
		title: 'Home',
	},
	{
		Icon: ProfileIcon,
		path: '/profile',
		title: 'My Profile',
	},
	{
		Icon: LibraryIcon,
		path: '/library',
		title: 'My Library',
	},
];