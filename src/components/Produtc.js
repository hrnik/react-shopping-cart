/**
 * Created by nkhristinin on 08.10.16.
 */
import React, {Component, PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */
export default class Product extends Component {
	onDeleteBtnClick(item) {
		console.log(item);
		this.props.deleteProduct(this.props.data);
	}

	render() {
		const {data} = this.props;

		return (
			<div>
				<p>{data.name}</p>
				<p>{data.count}</p>
				<p>{data.price}</p>
				<button onClick={::this.onDeleteBtnClick}>Delete</button>
			</div>
		);
	}
}


Product.propTypes = {
	data: PropTypes.object.isRequired,
	deleteProduct: PropTypes.func.isRequired
};