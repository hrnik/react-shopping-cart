import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsTable from '../components/ProductsTable';
import AddProduct from '../components/AddProduct';
import * as productActions from '../actions/ProductsAction';

class App extends Component {

	render() {
		const {products} = this.props.productsState;
		const {addProduct, deleteProduct} = this.props.productsActions;

		return (
			<div>
				<h1>React Shopping cart</h1>
				<AddProduct addProduct={addProduct}/>
				<ProductsTable products={products} deleteProduct={deleteProduct} />
			</div>);
	}
}

function mapStateToProps(state) {
	return {
		productsState: state.productsState
	}
}

function mapDispatchToProps(dispatch) {
	return {
		productsActions: bindActionCreators(productActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);