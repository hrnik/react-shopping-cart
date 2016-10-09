/**
 * Created by nkhristinin on 08.10.16.
 */
import React, { PropTypes} from 'react';

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
		<div>
			<p>{data.name}</p>
			<p>{data.count}</p>
			<p>{data.price * data.count}</p>
			<button onClick={onAddBtnClick}>Add count</button>
			<button onClick={onReduceBtnClick}>Reduce count</button>
			<button onClick={onDeleteBtnClick}>Delete</button>
		</div>
	);

};


Product.propTypes = {
	data: PropTypes.object.isRequired,
	deleteProduct: PropTypes.func.isRequired
};

export default Product;