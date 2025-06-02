import { useState } from 'react';
import { useAction } from '@/hooks/useAction';
import { useAppSelector } from '@/hooks/redux';
// @ts-ignore
import ReactFileReader from 'react-file-reader';

import classes from './profile.module.css';
import { Button } from '../UI/Button/Button';

export const ProfileImage = () => {
	const img = useAppSelector((state) => state.user.data?.img);
	const [selectedFile, setSelectedFile] = useState<string | null>(null);
	const [isUploaded, setIsUploaded] = useState<boolean>(false);
	const { changeImageAction } = useAction();

	// @ts-ignore
	const handleClick = (e) => {
		setSelectedFile(e.base64);
		setIsUploaded(true);
	};

	const handleSave = () => {
		if (selectedFile) {
			changeImageAction(selectedFile);
			setIsUploaded(false);
		}
	};

	return (
		<div className={classes.profile__image}>
			<img className={classes.image} src={img} />
			<div className={classes.upload__actions}>
				<ReactFileReader base64 handleFiles={handleClick}>
					<Button theme='white'>
						upload image
					</Button>
				</ReactFileReader>
				<Button
					theme='blue'
					onClick={handleSave}
					disabled={isUploaded ? false : true}
				>
					save image
				</Button>
			</div>
		</div>
	);
};
