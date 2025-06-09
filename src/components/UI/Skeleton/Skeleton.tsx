import { CSSProperties, FC } from 'react';
import classnames from 'classnames';
import classes from './Skeleton.module.css';

interface SkeletonProps {
	width?: string;
	height?: string;
	radius?: string;
	margin?: string;
	className?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
	const {
		width,
		height,
		radius,
		margin,
		className,
	} = props;

	const style: CSSProperties = {
		width,
		height,
		margin,
		borderRadius: radius,
	};

	return <div className={classnames(classes.Skeleton, className)} style={style} />;
};
