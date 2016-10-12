import React, {PropTypes} from 'react';
import '../styles/total-info.css';

/**
 * Component for checkout and show total price
 *
 * @param totalPrice
 * @param buyProducts
 * @param children
 */
const Checkout = ({totalPrice, buyProducts, children}) => (
		<div>
			<div className='total-info'>
				<div className='total-info__label'>Total</div>
				<div className='total-info__number'>{totalPrice} $</div>
			</div>
			<div className='checkout-btn-container'>
				<button className='btn btn--primary' onClick={buyProducts}>Buy</button>
			</div>
			{children}
		</div>
	);

Checkout.propTypes = {
	totalPrice: PropTypes.number.isRequired,
	buyProducts: PropTypes.func.isRequired
};

export default Checkout;