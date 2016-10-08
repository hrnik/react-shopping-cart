import React, {Component, PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */
export default class ProductsTable extends Component {
	onDeleteBtnClick(item) {
		console.log(item);
		this.props.deleteProduct(item);
	}

	render() {
		const {products} = this.props;
		let productsTemplate = products.map(item=> {
			return (
				<div key={item.id}>
					<p>{item.name}</p>
					<p>{item.count}</p>
					<p>{item.price}</p>
					<button onClick={this.onDeleteBtnClick.bind(this, item)}>Delete</button>
				</div>
			);
		});

		return (
			<div>
				{productsTemplate}
			</div>
		);
	}
}


ProductsTable.propTypes = {
	products: PropTypes.array.isRequired
};