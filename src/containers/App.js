import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {

	render() {
		return <div> React Shopping cart, { this.props.products.length}</div>
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(App);