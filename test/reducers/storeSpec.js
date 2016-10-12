import store from '../../src/reducers/store'
import {expect} from 'chai';

const action = {
	type:'GET_PRODUCTS_SUCCESS',
	payload:[1,2,3,4,5]
};

describe('Reducer: store', () => {

	it('should handle GET_PRODUCTS_SUCCESS', ()=> {
		expect(store(undefined, action).products.length).to.equal(5);
	});

});