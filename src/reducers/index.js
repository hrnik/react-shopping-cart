import {combineReducers} from 'redux';
import shoppingCart from './shoppingCart';

export default combineReducers({
	shoppingCart
})

/**
 * Return total price for products list
 * @param products
 * @returns {Number}
 */
export const getTotalPrice = (products) => {
	return products.reduce((sum, current)=>{
		return sum + current.price*current.count
	},0);
};