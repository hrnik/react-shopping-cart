import React, {Component, PropTypes} from 'react';
import Product from './Produtc'

/**
 * Component for products table
 * Add item, Remove item
 */
export default class ProductsTable extends Component {


	render() {
		const {products, deleteProduct} = this.props;
		let productsTemplate = products.map(item=> {
			return (
				<div key={item.id}>
					<Product data={item} deleteProduct={deleteProduct}/>
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