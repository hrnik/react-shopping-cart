/**
 * Created by nkhristinin on 08.10.16.
 */
import React, {Component, PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */
export default class Product extends Component {
	onDeleteBtnClick() {
		this.props.deleteProduct(this.props.data);
	}

	onReduceBtnClick(){
		this.props.reduceProductCount(this.props.data);
	}

	onAddBtnClick(){
		this.props.addProduct(this.props.data);
	}

	render() {
		const {data} = this.props;

		return (
			<div>
				<p>{data.name}</p>
				<p>{data.count}</p>
				<p>{data.price * data.count}</p>
				<button onClick={::this.onAddBtnClick}>Add count</button>
				<button onClick={::this.onReduceBtnClick}>Reduce count</button>
				<button onClick={::this.onDeleteBtnClick}>Delete</button>
			</div>
		);
	}
}


Product.propTypes = {
	data: PropTypes.object.isRequired,
	deleteProduct: PropTypes.func.isRequired
};