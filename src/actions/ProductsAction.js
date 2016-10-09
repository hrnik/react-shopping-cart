import API from '../api/API';
import {
	ADD_PRODUCT, DELETE_PRODUCT, REDUCE_PRODUCT_COUNT,
	GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS
} from '../constants/Product';

export const addProduct = product => ({
		type: ADD_PRODUCT,
		payload: product
})

export const deleteProduct = product => ({
	type: DELETE_PRODUCT,
	payload: product
});

export const reduceProductCount = product => ({
	type: REDUCE_PRODUCT_COUNT,
	payload: product
});


export const getProducts = id => dispatch => {
	dispatch({
		type: GET_PRODUCTS_REQUEST,
		payload: id
	});

	API.getProducts().then(
		product=> {
			dispatch({
				type: GET_PRODUCTS_SUCCESS,
				payload: product
			})
		},
		error=> {
			dispatch({
				type: GET_PRODUCTS_FAILURE,
				payload: error
			})
		});
}


