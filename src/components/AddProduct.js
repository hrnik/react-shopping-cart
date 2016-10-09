/**
 * Created by nkhristinin on 08.10.16.
 */
import React, { PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */
const AddProduct = ({addProduct}) => {
	const onAddBtnClick = () => {
		addProduct({
			id: 0,
			name: 'Cap for cat',
			price: 10
		});
	};

	return (
		<button onClick={onAddBtnClick}>Add Product</button>
	);

};

AddProduct.propType = {
	addProduct: PropTypes.func.isRequired
};


export default AddProduct;