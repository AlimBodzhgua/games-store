import { useState, useEffect, useRef, ChangeEvent, FC } from 'react';
import { useAction } from '@/hooks/useAction';
import { useDebounce } from '@/hooks/useDebounce';
import { Hotkey } from '@/components/UI/Hotkey/Hotkey';
import { useAppSelector } from '@/hooks/redux';
import { GamesService } from '@/services/GamesService';
import classnames from 'classnames';
import classes from './search-bar.module.css';

interface SearchBarProps {
	className?: string;
}

export const SearchBar: FC<SearchBarProps> = (props) => {
	const { className } = props;
	const [value, setValue] = useState('');
	const { page, games } = useAppSelector((state) => state.games);

	const { setGamesAction, setErrorAction } = useAction();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const search = async (search: string) => {
		try {
			const response = await GamesService.searchGame(search);
			setGamesAction(response.data);
		} catch (err) {
			setErrorAction(JSON.stringify(err));
		}
	}

	const debouncedSearch = useDebounce(search, 450);

	const toggleInputFocus = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && e.altKey) {
			if (document.activeElement === inputRef.current) {
				inputRef.current?.blur();
			} else {
				inputRef.current?.focus();
			}
		} else if (e.key === 'Escape') {
			inputRef.current?.blur();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', toggleInputFocus);

		return () => window.removeEventListener('keydown', toggleInputFocus);
	}, []);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		debouncedSearch(e.target.value);
	};
	
	return (
		<div className={classnames(classes.searchBar, className)}>
			<input
				ref={inputRef}
				value={value}
				onChange={onChange}
				className={classes.input}
				type='text'
				placeholder='Search'
			/>

			<div className={classes.hotkeys}>
				<Hotkey>alt</Hotkey>
				<span>+</span>
				<Hotkey>enter</Hotkey>
			</div>
		</div>
	);
};
