import { useState } from 'react';

export const useFetching = (callback: () => void) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetching = async () => {
		try {
			setIsLoading(true);
			await callback();
		} catch (error) {
			setError(JSON.stringify(error));
		} finally {
			setIsLoading(false);
		}
	};

	return { fetching, isLoading, error };
};
