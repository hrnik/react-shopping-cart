import {ADD_PRODUCT, DELETE_PRODUCT, REDUCE_PRODUCT_COUNT, SORT_TABLE_PRODUCT} from '../constants/Product';
import stableSort from '../utils/sort';

const sort = {
	field: '',
	isAsk: true
};

const initialState = {
	products: [],
	sort
};

/**
 * Shopping Cart reducer
 * [ADD_PRODUCT, DELETE_PRODUCT, REDUCE_PRODUCT_COUNT, SORT_TABLE_PRODUCT]
 *
 *
 * @param state
 * @param action
 * @return {*}
 */
const shoppingCart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			let isNewProduct = true,
				newProduct = action.payload,
				//if product is exist then increment counter
				products = state.products.map(item=> {
					if (item.id === newProduct.id) {
						item.count++;
						item.priceCount = item.price * item.count;
						isNewProduct = false;
					}
					return item;
				});

			//add new product in table
			if (isNewProduct) {
				newProduct.count = 1;
				newProduct.priceCount = newProduct.price * newProduct.count;
				products.push(newProduct);
			}

			return {
				...state,
				products,
				sort
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
				sort,
				products: state.products.map(item=> {
					if (item.id === action.payload.id && item.count > 1) {
						item.count--;
						item.priceCount = item.price * item.count;
					}
					return item;
				})
			};
		case SORT_TABLE_PRODUCT: {
			let field = action.payload,
				isAsk = true;
			if (state.sort.field === field) {
				isAsk = !state.sort.isAsk;
			}

			let ask = isAsk ? 1 : -1;
			//stable sort products list from field
			let products = stableSort(state.products, (a, b) => {
				if (a[field] > b[field]) return ask;
				if (a[field] < b[field]) return -(ask);
				return 0;
			});

			return {
				...state,
				sort: {field, isAsk},
				products
			}

		}
		default:
			return state;
	}
};

export default shoppingCart;