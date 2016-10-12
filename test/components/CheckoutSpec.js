import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

import Checkout from '../../src/components/Checkout';

const setup = (totalPrice) => {
	const actions = {
		buyProducts: sinon.spy()
	};

	const component = shallow(
		<Checkout totalPrice={totalPrice} {...actions} />
	);

	return {
		component: component,
		actions: actions,
		button: component.find('button'),
		totalNumber: component.find('.total-info__number')
	}
};

describe('<Checkout />', function () {
	it('should display total price', () => {
		const {totalNumber} = setup(999.99);

		expect(totalNumber.text()).to.equal('999.99 $');
	});

	it('should call action buyProducts after btn click', () =>{
		const {button, actions} = setup(10);
		button.simulate('click');
		expect(actions.buyProducts).to.have.property('callCount', 1);
	});
});