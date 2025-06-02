import { CSSProperties, FC } from 'react';
import classnames from 'classnames';
import classes from './Skeleton.module.css';

interface SkeletonProps {
	width?: string;
	height?: string;
	radius?: string;
	className?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
	const {
		width,
		height,
		radius,
		className,
	} = props;

	const style: CSSProperties = {
		width,
		height,
		borderRadius: radius,
	};

	return <div className={classnames(classes.Skeleton, className)} style={style} />;
};
