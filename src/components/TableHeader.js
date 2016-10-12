import React, {PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */

const TableHeader = ({sort, sortTableProducts}) => {
	const onSortClick = field => {
		sortTableProducts(field)
	};

	const toolBar = [{name: 'Name', field: 'name'}, {name: 'Count', field: 'count'}, {
		name: 'Price',
		field: 'price'
	}].map(item=>(
		<div key={item.field} onClick={onSortClick.bind(this, item.field)}
				 className={'table-price__cell ' + 'table-price__cell' + '--' + item.field}>{item.name}
			<div
				className={'icon ' + (sort.isAsk ? 'icon-sort-up ' : 'icon-sort-down ') + (sort.field !== item.field ? 'icon--hidden ' : ' ' )}></div>
		</div>
	));

	return (
		<div className='table-price__row table-price__row--header'>
			<div className='table-price__cell table-price__cell--delete'></div>
			{toolBar}
		</div>
	)
};


TableHeader.propTypes = {
	sort: PropTypes.object,
	sortTableProducts: PropTypes.func
};

export default TableHeader;