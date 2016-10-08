/**
 * Created by nkhristinin on 08.10.16.
 */
import React, {Component, PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */
export default class AddProduct extends Component {
	onAddBtnClick() {
		this.props.addProduct({
			id: 0,
			name: 'Cap for cat',
			price: 10
		});
	}

	render() {
		return (
			<button onClick={::this.onAddBtnClick}>Add Product</button>
		);
	}
}

AddProduct.propType ={
	addProduct: PropTypes.func.isRequired
};


