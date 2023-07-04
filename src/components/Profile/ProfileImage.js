import {useState, useEffect, memo} from 'react';
import {useSelector} from 'react-redux';
import {useAction} from 'hooks/useAction';
import ReactFileReader from 'react-file-reader';

import classes from './profile.module.css';

const ProfileImage = ()  => {
	const {img} = useSelector(state => state.user.data); 
	const [selectedFile, setSelectedFile] = useState(null);
	const [isUploaded, setIsUploaded] = useState(false);
	const {changeImageAction} = useAction();

	const handleClick = (e) => {
		setSelectedFile(e.base64);
		setIsUploaded(true);
	}

	const handleSave = () => {
		changeImageAction(selectedFile);
		setIsUploaded(false);
	}

	return (
		<div className={classes.profile__image}>
			<img className={classes.image} src={img} />
			<div className={classes.upload__actions}>
				<ReactFileReader base64 handleFiles={handleClick}>
					<button className={`${classes.btn} ${classes.btnWhite}`}>upload image</button>
				</ReactFileReader>
				<button 
					onClick={handleSave}
					className={`${classes.btn} ${classes.btnBlue}`}
					disabled={isUploaded ? false : true}
				>save image</button>
			</div>
		</div>
	)
}

export default memo(ProfileImage);