import { ADD_PRODUCT, DELETE_PRODUCT} from '../constants/Product';

export function addProduct(product) {
	return {
		type: ADD_PRODUCT,
		payload: product
	}
}

export function deleteProduct(product) {
	return {
		type: DELETE_PRODUCT,
		payload: product
	}
}