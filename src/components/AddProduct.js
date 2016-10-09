/**
 * Created by nkhristinin on 08.10.16.
 */
import React, { PropTypes} from 'react';

/**
 * Component for show add product button
 */
const AddProduct = ({addProduct, product}) => (
		<button onClick={addProduct}>Add {product.name}</button>
);

AddProduct.propType = {
	addProduct: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired
};


export default AddProduct;