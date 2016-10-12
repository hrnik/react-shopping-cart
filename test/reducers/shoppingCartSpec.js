import shoppingCart from '../../src/reducers/shoppingCart'
import {expect} from 'chai';

const product = {
	id: 0,
	name: 'Product 1',
	price: 10.5
};

describe('Reducer: shoppingCart', () => {
	describe('ADD_PRODUCT', () => {
		const action = {
			type: 'ADD_PRODUCT',
			payload: product
		};

		it('should add product', ()=> {
			expect(shoppingCart(undefined, action).products[0].name).to.equal('Product 1');
		});

		it('should increment count in exist product', ()=> {
			const state = shoppingCart(undefined, action);
			const newState = shoppingCart(state, action);
			expect(newState.products[0].count).to.equal(2);
		});
	});

	it('should handle DELETE_PRODUCT', ()=> {
		const action = {
			type: 'DELETE_PRODUCT',
			payload: product
		};
		expect(shoppingCart({products: [product]}, action).products.length).to.equal(0);
	});

	describe('REDUCE_PRODUCT_COUNT', () => {
		const action = {
			type: 'REDUCE_PRODUCT_COUNT',
			payload: product
		};

		it('should reduce count product', ()=> {
			expect(shoppingCart({
				products: [{
					id: 0,
					count: 3
				}]
			}, action).products[0].count).to.equal(2);
		});

		it('should not reduce count product if count === 1', ()=> {
			expect(shoppingCart({
				products: [{
					id: 0,
					count: 1
				}]
			}, action).products[0].count).to.equal(1);
		});
	});

	describe('SORT_TABLE_PRODUCT', () => {
		const action = {
			type: 'SORT_TABLE_PRODUCT',
			payload: 'name'
		};
		const products = [
			{
				id: 0,
				name: 'Baobab'
			},
			{
				id: 1,
				name: "Aqua"
			}
		];
		it('should sort ask if first', ()=> {
			expect(shoppingCart({products: products, sort: {field: ''}}, action).products[0].id).to.equal(1);
		});
		it('should sort desc if second', ()=> {
			expect(shoppingCart({products: products, sort: {field: 'name'}}, action).products[0].id).to.equal(1);
		});
	});


});