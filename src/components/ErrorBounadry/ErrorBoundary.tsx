import React, { ErrorInfo, ReactNode } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

type ErrorBoundaryProps = {
	children: ReactNode;
}

type ErrorBoundaryState = {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		console.log(error);
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) return <ErrorMessage />;

		return children;
	}
}