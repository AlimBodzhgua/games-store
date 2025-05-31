import PropTypes from 'prop-types';
import classes from './modal.module.css'

export const Modal = (props) => {
	const { handler, children } = props;
	
	return (
		<div className={classes.modal}>
			<div className={classes.modal__inner}>
				{children}
				<button onClick={handler} className={classes.modal__close}>&#x2716;</button>
			</div>
		</div>
	)
}


Modal.propTypes = {
	handler: PropTypes.func.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.elementType,
		PropTypes.node
	])
}