import React from 'react';
import {connect} from 'react-redux';
import AddProduct from '../components/AddProduct';
import {getProducts}  from '../actions/StoreAction';
import {addProduct} from '../actions/ProductsAction';

/**
 * Component showing products store from json
 * and adding product to shoping cart
 *
 * @param addProduct
 * @param products
 * @constructor
 */
const StoreContainer = ({addProduct, products}) => (
	<div className='store-btn-container'>
		{products.map(product=>
			<AddProduct key={product.id} product={product} addProduct={()=>{addProduct(product)}}/>
		)}
	</div>
);

//mapping state to props
function mapStateToProps(state) {
	return {
		products: state.store.products,
	}
}


export default connect(mapStateToProps,
	{getProducts, addProduct})(StoreContainer);