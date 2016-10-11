import {ADD_PRODUCT, DELETE_PRODUCT, REDUCE_PRODUCT_COUNT, SORT_TABLE_PRODUCT} from '../constants/Product';
import stable from 'stable';

const sort = {
	field: '',
	isAsk: true
};

const initialState = {
	products: [],
	sort
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
				let products = stable(state.products, (a, b) => {
					if (getFieldValue(a, field) > getFieldValue(b, field)) return ask;
					if (getFieldValue(a, field) < getFieldValue(b, field)) return -(ask);

					function getFieldValue(obj, field) {
						if (field === 'price') {
							return obj.count * obj.price;
						} else {
							return obj[field];
						}
					}
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
	}
	;

export default shoppingCart;