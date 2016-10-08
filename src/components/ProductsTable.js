import React, {Component, PropTypes} from 'react';
import Product from './Product'

/**
 * Component for products table
 * Add item, Remove item
 */
export default class ProductsTable extends Component {


	render() {
		const {products, deleteProduct, reduceProductCount, addProduct} = this.props;
		let productsTemplate = products.map(item=> {
			return (
				<div key={item.id}>
					<Product data={item}
                   deleteProduct={deleteProduct}
                   reduceProductCount={reduceProductCount}
                   addProduct={addProduct}/>
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