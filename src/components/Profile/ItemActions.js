import PropTypes from 'prop-types';
import classes from './profile.module.css';

export default function ItemActions({completeHandler, cancelHandler}) {
	return (
		<div className={classes.actions}>
		  	<button 
		  		onClick={completeHandler}
		  		className={classes.btn__complete}
		  	>&#x2714;</button>
		  	<button 
		  		onClick={cancelHandler} 
		  		className={classes.btn__cancel}
		  	>&#10005;</button>
	  	</div>
	)
}

ItemActions.propTypes = {
	completeHandler: PropTypes.func.isRequired,
	cancelHandler: PropTypes.func.isRequired,
}