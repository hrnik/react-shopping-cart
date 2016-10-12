import React, {PropTypes} from 'react';
import '../styles/table-price.css'

/**
 * Component for products table
 * Add item, Remove item
 */

const ProductsTable = ({children}) => (
		<div className='table-price'>
			{children}
		</div>
	);


ProductsTable.propTypes = {
	children: PropTypes.node,
	sortTableProducts: PropTypes.func
};

export default ProductsTable;