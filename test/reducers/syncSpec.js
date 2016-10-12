import sync from '../../src/reducers/sync';
import {expect} from 'chai';


describe('Reducer: sync', () => {

	describe('BUY_PRODUCT_SUCCESS', () => {
		const action = {
			type: 'BUY_PRODUCT_SUCCESS',
			payload: 'success message'
		};
		it('should set success message', ()=> {
			expect(sync(undefined, action).message).to.equal('success message');
		});
		it('should set isError false', ()=> {
			expect(sync(undefined, action).isError).to.equal(false);
		});
	});

	describe('BUY_PRODUCT_FAILURE', () => {
		const action = {
			type: 'BUY_PRODUCT_FAILURE',
			payload: 'error message'
		};
		it('should set error message', ()=> {
			expect(sync(undefined, action).message).to.equal('error message');
		});
		it('should set isError true', ()=> {
			expect(sync(undefined, action).isError).to.equal(true);
		});
	});


});