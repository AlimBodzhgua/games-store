import { FC, useState } from 'react';
import { useAction } from '@/hooks/useAction';
import { useAppSelector } from '@/hooks/redux';
import { Button } from '@/components/UI/Button/Button';
import { selectUserImage } from '@/redux/selectors/userSelectors';
// @ts-ignore
import ReactFileReader from 'react-file-reader';
import classnames from 'classnames';
import classes from './profile.module.css';

interface ProfileImageProps {
	className?: string;
}

export const ProfileImage: FC<ProfileImageProps> = (props) => {
	const { className } = props;
	const img = useAppSelector(selectUserImage);
	const [selectedFile, setSelectedFile] = useState<string | null>(null);
	const [isUploaded, setIsUploaded] = useState<boolean>(false);
	const { changeImageAction } = useAction();

	// @ts-ignore
	const onUpload = (e) => {
		setSelectedFile(e.base64);
		setIsUploaded(true);
	};

	const onSave = () => {
		if (selectedFile) {
			changeImageAction(selectedFile);
			setIsUploaded(false);
		}
	};

	return (
		<div className={classnames(classes.ProfileImage, className)}>
			<img className={classes.image} src={img} />
			<div className={classes.upload__actions}>
				<ReactFileReader base64 handleFiles={onUpload}>
					<Button theme='white'>
						upload image
					</Button>
				</ReactFileReader>
				<Button
					theme='blue'
					onClick={onSave}
					disabled={isUploaded ? false : true}
				>
					save image
				</Button>
			</div>
		</div>
	);
};
