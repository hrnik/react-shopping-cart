import React, { PropTypes} from 'react';

/**
 * Component for checkout and show total pric
 * Add item, Remove item
 */

const Checkout = ({totalPrice}) => {

	return (
		<div>
			<p>{totalPrice}</p>
			<button>Buy</button>
		</div>
	);

};


Checkout.propTypes = {
	totalPrice: PropTypes.number.isRequired
};

export default Checkout;