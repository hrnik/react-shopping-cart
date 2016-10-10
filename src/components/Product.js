/**
 * Created by nkhristinin on 08.10.16.
 */
import React, {PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */
const Product = ({deleteProduct, reduceProductCount, addProduct, data}) => {
	const onDeleteBtnClick = () => {
		deleteProduct(data);
	};

	const onReduceBtnClick = () => {
		reduceProductCount(data);
	};

	const onAddBtnClick = () => {
		addProduct(data);
	};


	return (
		<div className='table-price__row'>
			<div className='table-price__cell table-price__cell--delete'>
				<div onClick={onDeleteBtnClick} className='icon-delete icon'></div>
			</div>
			<div className='table-price__cell table-price__cell--name'>{data.name}</div>
			<div className='table-price__cell table-price__cell--count'>
				<div className="icon icon-minus" onClick={onReduceBtnClick}></div>
				<div className="count-text">{data.count}</div>
				<div className="icon icon-plus" onClick={onAddBtnClick}></div>
			</div>
			<div className='table-price__cell table-price__cell--price'>{data.price * data.count} $</div>
		</div>
	);

};


Product.propTypes = {
	data: PropTypes.object.isRequired,
	deleteProduct: PropTypes.func.isRequired
};

export default Product;