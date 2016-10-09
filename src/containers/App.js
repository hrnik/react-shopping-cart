import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsTable from '../components/ProductsTable';
import Product from '../components/Product';
import AddProduct from '../components/AddProduct';
import Checkout from '../components/Checkout';
import {getTotalPrice} from '../reducers'
import * as productActions from '../actions/ProductsAction';


const App = ({products, deleteProduct, reduceProductCount, addProduct, totalPrice}) => (
	<div>
		<h1>React Shopping cart</h1>
		<AddProduct addProduct={addProduct}/>
		<ProductsTable>
			{products.map(item=>
				<Product key={item.id}
								 data={item}
								 deleteProduct={deleteProduct}
								 reduceProductCount={reduceProductCount}
								 addProduct={addProduct}/>
			)}
		</ProductsTable>
		<Checkout totalPrice={totalPrice}></Checkout>
	</div>
);

function mapStateToProps(state) {
	return {
		products: state.shoppingCart.products,
		totalPrice: getTotalPrice(state.shoppingCart.products)
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators(productActions, dispatch);
	return {
		...boundActionCreators
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);