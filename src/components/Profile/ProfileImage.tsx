import { useState } from 'react';
import { useAction } from '@/hooks/useAction';
import ReactFileReader from 'react-file-reader';

import classes from './profile.module.css';
import { useAppSelector } from '@/hooks/redux';

export const ProfileImage = () => {
	const img = useAppSelector((state) => state.user.data?.img);
	const [selectedFile, setSelectedFile] = useState<string | null>(null);
	const [isUploaded, setIsUploaded] = useState<boolean>(false);
	const { changeImageAction } = useAction();

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
					<button className={`${classes.btn} ${classes.btnWhite}`}>
						upload image
					</button>
				</ReactFileReader>
				<button
					onClick={handleSave}
					className={`${classes.btn} ${classes.btnBlue}`}
					disabled={isUploaded ? false : true}
				>
					save image
				</button>
			</div>
		</div>
	);
};
