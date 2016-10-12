import React, {PropTypes} from 'react';

/**
 * Component for table header
 * Sort table from field
 *
 * @param sort
 * @param sortTableProducts
 */
const TableHeader = ({sort, sortTableProducts}) => {
	const fieldArray = [
		{name: 'Name',  field: 'name'},
		{name: 'Count', field: 'count'},
		{name: 'Price', field: 'priceCount'}
		];
	const onSortClick = field => {
		sortTableProducts(field)
	};

	const toolBarTemplate = fieldArray.map(item=>(
		<div key={item.field} onClick={onSortClick.bind(this, item.field)}
				 className={'table-price__cell ' + 'table-price__cell' + '--' + item.field}>{item.name}
			<div
				className={'icon ' + (sort.isAsk ? 'icon-sort-up ' : 'icon-sort-down ') + (sort.field !== item.field ? 'icon--hidden ' : ' ' )}></div>
		</div>
	));

	return (
		<div className='table-price__row table-price__row--header'>
			<div className='table-price__cell table-price__cell--delete'></div>
			{toolBarTemplate}
		</div>
	)
};


TableHeader.propTypes = {
	sort: PropTypes.object,
	sortTableProducts: PropTypes.func
};

export default TableHeader;