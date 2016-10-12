import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';


import ProductsTable from '../../src/components/ProductsTable';

const setup = (children) => {


	const component = shallow(
		<ProductsTable>{children}</ProductsTable>
	);

	return {
		component: component
	}
};


describe('<ProductsTable />', function () {
	it('should render children', () => {
		const {component} = setup('hello parent');
		expect(component.text()).to.equal('hello parent');
	});

});