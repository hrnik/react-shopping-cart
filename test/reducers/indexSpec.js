import {getTotalPrice} from '../../src/reducers/index'
import {expect} from 'chai';

describe('Reducer: index', () => {
	it('should return total price', ()=> {
		const products = [{
			price: 1.2,
			count: 4
		}, {
			price: 10.4,
			count: 1
		}];

		expect(getTotalPrice(products)).to.equal(15.2);
	})
});