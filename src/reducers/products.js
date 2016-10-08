const initialState = {
	products: []
};

export default function productsState(state = initialState, action) {
	switch (action.type) {
		case 'ADD_PRODUCT': {
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
		case 'DELETE_PRODUCT':
			return {
				...state,
				products: state.products.filter(item => item.id !== action.payload.id)
			};
		default:
			return state;
	}
}