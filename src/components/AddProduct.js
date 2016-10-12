/**
 * Created by nkhristinin on 08.10.16.
 */
import React, { PropTypes} from 'react';

/**
 * Component for show add product button
 *
 * @param addProduct
 * @param product
 */
const AddProduct = ({addProduct, product}) => (
		<button className='btn' onClick={addProduct}>Add {product.name}</button>
);

AddProduct.propType = {
	addProduct: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired
};


export default AddProduct;