import {useState, useEffect, useRef} from 'react';

import classes from './profile.module.css';

export default function ImageUpload() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [uploaded, setUploaded] = useState();
	const uploadRef = useRef(null);

	const handleChange = (e) => {
		console.log(e.target.files[0]);
		setSelectedFile(e.target.files[0]);
	}

	const handleClick = () => {
		uploadRef.current.click();
	}

	return (
		<>
			<button 
				onClick={handleClick}
				className='btn btn--white'
			>upload image</button>
			<input 
				ref={uploadRef}
				type="file" 
				onChange={handleChange} 
				accept="image/*"
				className={classes.hide}
			/>
		</>
	)
}