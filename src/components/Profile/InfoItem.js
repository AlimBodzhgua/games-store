import ItemActions from './ItemActions';
import PropTypes from 'prop-types';
import Input from 'components/UI/Input/Input';

import classes from './profile.module.css';

export default function InfoItem({
	value, 
	valueChange, 
	onValueChange, 
	saveValueChange, 
	handleChanging, 
	handleCancelChanging
}){
	return (
		<div className={classes.info__item}>
			{valueChange.isChanging 
				? <>
					<Input
						className={classes.input} 
						type="text" 
						value={valueChange.value} 
						onChange={onValueChange}
				  	/>
				  	<ItemActions 
				  		completeHandler={() => saveValueChange(valueChange.value)}
				  		cancelHandler={handleCancelChanging}
				  	/>
				  </>
				: <>
					<div>{value}</div>
					<button 
						onClick={handleChanging} 
						className={classes.btn}
					>edit</button>
				  </>
			}
		</div>
	)
}

InfoItem.propTypes = {
	value: PropTypes.string.isRequired,
	valueChange: PropTypes.shape({
		value: PropTypes.string.isRequired,
		isChanging: PropTypes.bool.isRequired,
	}),
	onValueChange: PropTypes.func.isRequired,
	saveValueChange: PropTypes.func.isRequired,
	handleChanging: PropTypes.func.isRequired, 
	handleCancelChanging: PropTypes.func.isRequired,
}