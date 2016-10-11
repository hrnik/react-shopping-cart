import React, {PropTypes} from 'react';
import '../styles/table-price.css'

/**
 * Component for products table
 * Add item, Remove item
 */

const ProductsTable = ({children, sortTableProducts}) => {
	const onSortClick = field =>{
		sortTableProducts(field)
	};

	return (
		<div className='table-price'>
			<div className='table-price__row table-price__row--header'>
				<div className='table-price-cell table-price__cell--delete'></div>
				<div onClick={onSortClick.bind(this, 'name')} className='table-price-cell table-price__cell--name'>Name</div>
				<div onClick={onSortClick.bind(this, 'count')} className='table-price-cell table-price__cell--count'>Count</div>
				<div onClick={onSortClick.bind(this, 'price')} className='table-price-cell table-price__cell--price'>Price</div>
			</div>
			{children}
		</div>
	);

};


ProductsTable.propTypes = {
	children: PropTypes.node,
	sortTableProducts: PropTypes.func
};

export default ProductsTable;