import API from '../api/API';
import {
	ADD_PRODUCT, DELETE_PRODUCT, REDUCE_PRODUCT_COUNT,
	BUY_PRODUCT_REQUEST, BUY_PRODUCT_SUCCESS, BUY_PRODUCT_FAILURE,
	SORT_TABLE_PRODUCT
} from '../constants/Product';

/**
 * Add product to product list
 * @param product
 */
export const addProduct = product => ({
	type: ADD_PRODUCT,
	payload: product
});

/**
 * Delete product from products list
 * @param product
 */
export const deleteProduct = product => ({
	type: DELETE_PRODUCT,
	payload: product
});

/**
 * Reduce Product count
 * min count = 1
 * @param product
 */
export const reduceProductCount = product => ({
	type: REDUCE_PRODUCT_COUNT,
	payload: product
});

/**
 * Sort table
 * @param field
 */
export const sortTableProducts = field => ({
	type:SORT_TABLE_PRODUCT,
	payload:field
});

/**
 * Get list products from API
 */
export const buyProducts = () => (dispatch, getState) => {
	dispatch({
		type: BUY_PRODUCT_REQUEST
	});

	API.buy(getState().shoppingCart.products).then(
		message=> {
			dispatch({
				type: BUY_PRODUCT_SUCCESS,
				payload: message
			});
		}, error=> {
			dispatch({
				type: BUY_PRODUCT_FAILURE,
				payload: error.toString()
			});
		})
};



