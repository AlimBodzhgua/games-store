import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '@/redux/reducers/actions';

export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
