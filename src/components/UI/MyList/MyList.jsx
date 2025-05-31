import PropTypes from 'prop-types';
import { MyListItem } from './MyListItem';
import classes from './my-list.module.css';

export const MyList = ({ list }) => {
	return (
		<ol className={classes.myList}>
			{list.map(item => 
				<MyListItem key={item.id} name={item.name}/>
			)}
		</ol>
	)
}

MyList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
	}))
}