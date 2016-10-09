
import {
	ADD_PRODUCT, DELETE_PRODUCT, REDUCE_PRODUCT_COUNT
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



