import { FC, memo } from 'react';
import { Button } from '@/components/UI/Button/Button';
import type { Store } from '@/types/game';
import classnames from 'classnames';

import { mapToStoreIcon, StoreNameType } from './Stores';
import classes from './Stores.module.css';

interface StoreItemProps {
	store: Store;
	className?: string;
}

export const StoreItem: FC<StoreItemProps> = memo((props) => {
	const { store, className } = props;
	const storeName = store.name.split(' ')[0].toLowerCase() as StoreNameType;

	const onNavigate = () => {
		window.open(mapToStoreIcon[storeName].link, '_blank');
	}

	return (
		<li>
			<Button
				className={classnames(classes.storeBtn, className)}
				onClick={onNavigate}
			>
				{store.name}
				{mapToStoreIcon[storeName].icon}
			</Button>
		</li>
	)
})