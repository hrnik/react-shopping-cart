import {combineReducers} from 'redux';
import shoppingCart from './shoppingCart';
import store from './store';

export default combineReducers({
	shoppingCart,
	store
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