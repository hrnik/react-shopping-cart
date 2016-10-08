import React, {Component, PropTypes} from 'react';

/**
 * Component for products table
 * Add item, Remove item
 */
export default class ProductsTable extends Component {
	render() {
		const {products} = this.props;
		let productsTemplate = products.map(item=> {
			return (
				<div key={item.id}>
					<p>{item.name}</p>
					<p>{item.count}</p>
					<p>{item.price}</p>
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