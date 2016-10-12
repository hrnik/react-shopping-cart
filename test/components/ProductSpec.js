import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

import Product from '../../src/components/Product';

const setup = (product) => {
	const actions = {
		addProduct: sinon.spy(),
		deleteProduct: sinon.spy(),
		reduceProductCount: sinon.spy()
	};

	const component = shallow(
		<Product product={product} {...actions} />
	);

	return {
		component: component,
		actions: actions,
		buttonAdd: component.find('.icon-plus'),
		buttonReduce: component.find('.icon-minus'),
		buttonDelete: component.find('.icon-delete'),
		textCount: component.find('.count-text'),
		productName: component.find('.table-price__cell--name'),
		priceCount: component.find('.table-price__cell--priceCount')
	}
};

const initProduct = {
	id:0,
	count:1,
	name:"Product 1",
	price:5.5,
	priceCount:5.5,
};

describe('<Product />', function () {
	it('should display product name', () => {
		const {productName} = setup(initProduct);
		expect(productName.text()).to.equal(initProduct.name);
	});

	it('should display product count', () => {
		const {textCount} = setup(initProduct);
		expect(textCount.text()).to.equal('1');
	});

	it('should display product price count', () => {
		const {priceCount} = setup(initProduct);
		expect(priceCount.text()).to.equal('5.5 $');
	});

	it('should call action addProduct after btn click', () =>{
		const {buttonAdd, actions} = setup(initProduct);
		buttonAdd.simulate('click');
		expect(actions.addProduct).to.have.property('callCount', 1);
	});

	it('should call action reduceProductCount after btn click', () =>{
		const {buttonReduce, actions} = setup(initProduct);
		buttonReduce.simulate('click');
		expect(actions.reduceProductCount).to.have.property('callCount', 1);
	});

	it('should call action deleteProduct after btn click', () =>{
		const {buttonDelete, actions} = setup(initProduct);
		buttonDelete.simulate('click');
		expect(actions.deleteProduct).to.have.property('callCount', 1);
	});
});