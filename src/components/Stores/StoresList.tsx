import { FC, memo } from 'react';
import type { Store } from '@/types/game';
import classnames from 'classnames';

import { StoreItem } from './StoreItem';
import classes from './Stores.module.css';

interface StoresListProps {
	stores: Store[];
	className?: string;
}

export const StoresList: FC<StoresListProps> = memo((props) => {
	const { stores, className } = props;

	return (
		<ul className={classnames(classes.StoresList, className)}>
			{stores.map((store) => (
				<StoreItem store={store} key={store.id} />
			))}
		</ul>
	);
});
