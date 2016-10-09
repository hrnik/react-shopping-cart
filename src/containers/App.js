import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsTable from '../components/ProductsTable';
import Product from '../components/Product';
import AddProduct from '../components/AddProduct';
import * as productActions from '../actions/ProductsAction';


const App = ({products, deleteProduct, reduceProductCount, addProduct}) => (
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
	</div>
);

function mapStateToProps(state) {
	return {
		products: state.productsState.products
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators(productActions, dispatch);
	return {
		...boundActionCreators
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);