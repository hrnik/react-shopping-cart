import _products from './products.json';
import Promise from 'Promise';

export default {
	/**
	 * Return all product from json
	 * @return Promise
	 * @param id
	 */
	getProducts: () => new Promise(resolve => resolve(_products)),

	/**
	 * Fake API operation - buy production
	 * sync is ok if products.lengt > 3
	 * else throw error
	 * @return Proimuse
	 * @param products
	 */
	buy: (products) => new Promise((resolve, reject)=>{
		if(products.length > 3){
			resolve('Ok!');
		} else {
			reject(new Error('3 products min'));
		}
	})


}