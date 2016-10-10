import { ADD_PRODUCT, DELETE_PRODUCT, REDUCE_PRODUCT_COUNT} from '../constants/Product';


const initialState = {
	products: [],

};

const shoppingCart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			let isNewProduct = true,
				newProduct = action.payload,
				//if product is exist then increment counter
				products = state.products.map(item=> {
					if (item.id === newProduct.id) {
						item.count++;
						isNewProduct = false;
					}
					return item;
				});

			//add new product in table
			if (isNewProduct) {
				newProduct.count = 1;
				products.push(newProduct);
			}

			return {
				...state,
				products
			};
		}
		case DELETE_PRODUCT:
			return {
				...state,
				products: state.products.filter(item => item.id !== action.payload.id)
			};
		case REDUCE_PRODUCT_COUNT:
			return {
				...state,
				products: state.products.map(item=>{
					if(item.id === action.payload.id && item.count > 1){
						item.count--;
					}
					return item;
				})
			};
		default:
			return state;
	}
};

export default shoppingCart;