import API from '../api/API';
import {
	ADD_PRODUCT, DELETE_PRODUCT, REDUCE_PRODUCT_COUNT,
	BUY_PRODUCT_REQUEST, BUY_PRODUCT_SUCCESS, BUY_PRODUCT_FAILURE
} from '../constants/Product';

export const addProduct = product => ({
	type: ADD_PRODUCT,
	payload: product
});

export const deleteProduct = product => ({
	type: DELETE_PRODUCT,
	payload: product
});

export const reduceProductCount = product => ({
	type: REDUCE_PRODUCT_COUNT,
	payload: product
});

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



