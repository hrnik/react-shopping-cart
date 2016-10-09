import API from '../api/API';
import {
	GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS
} from '../constants/Store';

export const getProducts = id => dispatch => {
	dispatch({
		type: GET_PRODUCTS_REQUEST,
		payload: id
	});

	API.getProducts().then(
		product => {
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