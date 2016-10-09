import _products from './products.json';
import Promise from 'Promise';

export default {
	/**
	 * Return all product from json
	 * @return Promise
	 * @param id
	 */
	getProducts: () => new Promise((resolve, reject) => resolve(_products))


}