import { useRef, useCallback } from 'react';

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
	const timer = useRef<ReturnType<typeof setTimeout>>(null);

	const debouncedCallback = useCallback(
		(...args: any[]) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, timer],
	);

	return debouncedCallback;
};
