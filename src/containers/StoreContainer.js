import React from 'react';
import {connect} from 'react-redux';
import AddProduct from '../components/AddProduct';
import {getProducts}  from '../actions/StoreAction';
import {addProduct} from '../actions/ProductsAction';


const StoreContainer = ({addProduct, products}) => (
	<div>

		{products.map(product=>
			<AddProduct key={product.id} product={product} addProduct={()=>{addProduct(product)}}/>
		)}
	</div>
);

function mapStateToProps(state) {
	return {
		products: state.store.products,
	}
}


export default connect(mapStateToProps,
	{getProducts, addProduct})(StoreContainer);