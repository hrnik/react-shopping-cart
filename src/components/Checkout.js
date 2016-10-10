import React, { PropTypes} from 'react';

/**
 * Component for checkout and show total pric
 * Add item, Remove item
 */

const Checkout = ({totalPrice,buyProducts, children}) => {

	return (
		<div>
			{children}
			<p>{totalPrice}</p>
			<button onClick={buyProducts}>Buy</button>
		</div>
	);

};


Checkout.propTypes = {
	totalPrice: PropTypes.number.isRequired,
	buyProducts:PropTypes.func.isRequired
};

export default Checkout;