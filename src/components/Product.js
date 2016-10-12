/**
 * Created by nkhristinin on 08.10.16.
 */
import React, {PropTypes} from 'react';

/**
 * Component for products row
 * Add/Reduce count item, Remove item, show price
 * 
 * @param deleteProduct
 * @param reduceProductCount
 * @param addProduct
 * @param product
 */
const Product = ({deleteProduct, reduceProductCount, addProduct, product}) => {
	const onDeleteBtnClick = () => {
		deleteProduct(product);
	};

	const onReduceBtnClick = () => {
		reduceProductCount(product);
	};

	const onAddBtnClick = () => {
		addProduct(product);
	};

	return (
		<div className='table-price__row'>
			<div className='table-price__cell table-price__cell--delete'>
				<div onClick={onDeleteBtnClick} className='icon-delete icon'></div>
			</div>
			<div className='table-price__cell table-price__cell--name'>{product.name}</div>
			<div className='table-price__cell table-price__cell--count'>
				<div className={'icon icon-minus ' + (product.count == 1 ? 'icon--disabled ' : ' ')}
						 onClick={onReduceBtnClick}></div>
				<div className='count-text'>{product.count}</div>
				<div className='icon icon-plus' onClick={onAddBtnClick}></div>
			</div>
			<div className='table-price__cell table-price__cell--priceCount'>{product.priceCount} $</div>
		</div>
	);
};


Product.propTypes = {
	product: PropTypes.object.isRequired,
	deleteProduct: PropTypes.func.isRequired
};

export default Product;