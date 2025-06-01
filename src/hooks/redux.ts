import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { StateSchema } from '@/redux/store';

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector; 