import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

import AddProduct from '../../src/components/AddProduct';

const setup = (product) => {
	const actions = {
		addProduct: sinon.spy()
	};

	const component = shallow(
		<AddProduct product={product} {...actions} />
	);

	return {
		component: component,
		actions: actions,
		button: component.find('button')
	}
};

describe('<AddProduct />', function () {
	it('should display btnName', () => {
		const {button} = setup({
			name:'btnName'
		});

		expect(button.text()).to.equal('Add btnName');
	});

	it('should call action addProduct after btn click', () =>{
		const {button, actions} = setup({
			name:'btn name'
		});
		button.simulate('click');
		expect(actions.addProduct).to.have.property('callCount', 1);
	});
});