import {useSelector} from 'react-redux';
import ProfileInfo from 'components/Profile/ProfileInfo';
import {useNavigate} from 'react-router-dom'

export default function ProfilePage() {
	const {data} = useSelector(state => state.user);
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}
	
	return (
		<div className='page'>
			<div className='page__header page__header--sm'>
				<h1>Account</h1>
				<button className='btn' onClick={handleClick}>go back</button>
			</div>
			<ProfileInfo data={data}/>
		</div>
	)
}