import React, { PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */

const ProductsTable = ({children}) => {

	return (
		<div>
			{children}
		</div>
	);

};


ProductsTable.propTypes = {
	children: PropTypes.node
};

export default ProductsTable;