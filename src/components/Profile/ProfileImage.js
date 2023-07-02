import {useState, useEffect} from 'react';
import {useAction} from 'hooks/useAction';
import ReactFileReader from 'react-file-reader';

import classes from './profile.module.css';

export default function ProfileImage({img}) {
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
					<button className='btn btn--white'>upload image</button>
				</ReactFileReader>
				<button 
					onClick={handleSave}
					className='btn btn--blue'
					disabled={isUploaded ? false : true}
				>save image</button>
			</div>
		</div>
	)
}