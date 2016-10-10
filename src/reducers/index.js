import {combineReducers} from 'redux';
import shoppingCart from './shoppingCart';
import store from './store';
import sync from './sync';

export default combineReducers({
	shoppingCart,
	store,
	sync
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