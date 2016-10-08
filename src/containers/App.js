import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductsTable from '../components/ProductsTable';

class App extends Component {

	render() {
		const {products} = this.props.productsState;
		console.log(this.props);
		return (
			<div>
				<h1>React Shopping cart</h1>
				<ProductsTable products={products}></ProductsTable>
			</div>);
	}
}

function mapStateToProps(state) {
	return {
		productsState: state.productsState
	}
}

export default connect(mapStateToProps)(App);