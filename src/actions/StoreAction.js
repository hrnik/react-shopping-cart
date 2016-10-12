import API from '../api/API';
import {
	GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS
} from '../constants/Store';

/**
 * Get products from json, for fake store
 * @param id
 */
export const getProducts = () => dispatch => {
	dispatch({
		type: GET_PRODUCTS_REQUEST
	});

	API.getProducts().then(
		products => {
			dispatch({
				type: GET_PRODUCTS_SUCCESS,
				payload: products
			})
		},
		error=> {
			dispatch({
				type: GET_PRODUCTS_FAILURE,
				payload: error
			})
		});
};