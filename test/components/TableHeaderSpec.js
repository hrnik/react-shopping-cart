import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

import TableHeader from '../../src/components/TableHeader';

const setup = (sort) => {
	const actions = {
		sortTableProducts: sinon.spy()
	};

	const component = shallow(
		<TableHeader sort={sort} {...actions} />
	);

	return {
		component: component,
		actions: actions,
		cellName: component.find('.table-price__cell--name'),
		sortIcon: component.find('.table-price__cell--name .icon')
	}
};


describe('<TableHeader />', function () {
	it('should display field name', () => {
		const {cellName} = setup({});
		expect(cellName.text()).to.equal('Name');
	});

	it('should display sort icon up', () => {
		const {sortIcon} = setup({field:'name', isAsk:true});
		expect(sortIcon.hasClass('icon-sort-up')).to.equal(true);
	});

	it('should display sort icon down', () => {
		const {sortIcon} = setup({field:'name', isAsk:false});
		expect(sortIcon.hasClass('icon-sort-down')).to.equal(true);
	});

	it('should call action sortTableProducts after btn click', () =>{
		const {cellName, actions} = setup({
			name:'btn name'
		});
		cellName.simulate('click');
		expect(actions.sortTableProducts).to.have.property('callCount', 1);
	});

});