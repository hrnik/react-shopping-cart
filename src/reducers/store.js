import {GET_PRODUCTS_SUCCESS} from '../constants/Store';

const initialState = {
	products: []
};

const store = (state = initialState, action) => {
	switch(action.type){
		case GET_PRODUCTS_SUCCESS:{
				return {
				...state,
				products:action.payload
			}
		}
		default:
			return state;
	}
};

export default store;