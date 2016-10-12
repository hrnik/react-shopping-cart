import {BUY_PRODUCT_SUCCESS, BUY_PRODUCT_FAILURE} from '../constants/Product'

/**
 * Sync reducers
 * [BUY_PRODUCT_SUCCESS,] BUY_PRODUCT_FAILURE
 *
 * @param state
 * @param action
 * @return {*}
 */
const sync = (state = null, action) => {
	switch (action.type) {
		case BUY_PRODUCT_SUCCESS:
			return {
				...state,
				isError: false,
				message: action.payload
			};
		case BUY_PRODUCT_FAILURE:
			return {
				...state,
				isError: true,
				message: action.payload
			};
		default:
			return state;
	}
};

export default sync;
