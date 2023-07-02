import {useSelector} from 'react-redux';
import {useAction} from 'hooks/useAction';
import ProfileInfo from 'components/Profile/ProfileInfo';
import {useNavigate} from 'react-router-dom'

export default function ProfilePage() {
	const {data} = useSelector(state => state.user);
	const {logout} = useAction();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}

	const handleLogout = () => {
		const confirm = window.confirm('Are you sure you want to logout?');
		if (confirm) {
			logout();
			navigate('/');
		}
	}
	
	return (
		<div className='page'>
			<div className='page__header page__header--sm'>
				<h1>Account</h1>
				<div style={{display: 'flex', gap: '5px'}}>
					<button className='btn' onClick={handleClick}>go back</button>
					<button className='btn' onClick={handleLogout}>logout</button>
				</div>
			</div>
			<ProfileInfo data={data}/>
		</div>
	)
}