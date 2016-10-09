import {GET_PRODUCTS_REQUEST} from '../constants/Product';

const initialState = {
	products: []
};

const store = (state = initialState, action) => {
	switch(action.type){
		case GET_PRODUCTS_REQUEST:
			return {
				...state,
				products:action.payload
			}
		default:
			return state;
	}
};

export default store;