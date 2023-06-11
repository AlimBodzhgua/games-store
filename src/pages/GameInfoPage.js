import {useParams} from 'react-router-dom';

export default function GameInfoPage() {
	const param = useParams();

	return (
		<div>
			<h2>GameInfoPage: {param}</h2>
		</div>
	)
}