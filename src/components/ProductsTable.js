import React, {PropTypes} from 'react';
import '../styles/table-price.css'

/**
 * Component for products table
 * Add item, Remove item
 */

const ProductsTable = ({children}) => {

	return (
		<div className='table-price'>
			<div className='table-price__row table-price__row--header'>
				<div className='table-price-cell table-price__cell--delete'></div>
				<div className='table-price-cell table-price__cell--name'>Name</div>
				<div className='table-price-cell table-price__cell--count'>Count</div>
				<div className='table-price-cell table-price__cell--price'>Price</div>
			</div>
			{children}
		</div>
	);

};


ProductsTable.propTypes = {
	children: PropTypes.node
};

export default ProductsTable;