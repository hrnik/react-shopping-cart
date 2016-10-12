import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

import SyncMessage from '../../src/components/SyncMessage';

const setup = (message, isError) => {

	const component = shallow(
		<SyncMessage message={message} isError={isError}/>
	);

	return {
		component: component,
		syncMessage: component.find('.sync-message')
	}
};

describe('<SyncMessage />', function () {
	it('should display message', () => {
		const {syncMessage} = setup('Hello message', false);
		expect(syncMessage.text()).to.equal('Hello message');
	});

	it('should contains errorClass', () => {
		const {syncMessage} = setup('Hello message', true);
		expect(syncMessage.hasClass('sync-message--error')).to.equal(true);
	});

	it('should contains successClass', () => {
		const {syncMessage} = setup('Hello message', false);
		expect(syncMessage.hasClass('sync-message--success')).to.equal(true);
	});
});