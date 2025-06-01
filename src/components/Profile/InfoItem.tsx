import PropTypes from 'prop-types';
import { Input } from '@/components/UI/Input/Input';
import { ItemActions } from './ItemActions';

import classes from './profile.module.css';
import { ChangeEvent, FC } from 'react';

interface InfoItemProps {
	value: string;
	isChanging: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSave: (value: string) => void;
	onCancel: () => void;
}


export const InfoItem: FC<InfoItemProps> = (props) => {
	const {
		value,
		isChanging,
		onChange,
		onSave,
		onCancel,
	} = props


	return (
		<div className={classes.info__item}>
			{isChanging ? (
				<>
					<Input
						className={classes.input}
						type='text'
						value={value}
						onChange={onChange}
					/>
					<ItemActions
						onComplete={() => onSave(value)}
						onCancel={onCancel}
					/>
				</>
			) : (
				<>
					<div>{value}</div>
					<button onClick={onCancel} className={classes.btnInline}>
						edit
					</button>
				</>
			)}
		</div>
	);
}