import React, {PropTypes} from 'react';

const SyncMessage = ({message, isError})=>(
	<div className={isError ? 'sync-message--error' : 'sync-message-success'}>{message}</div>
);

SyncMessage.propTypes = {
	message: PropTypes.string,
	isError: PropTypes.bool
};

export default SyncMessage;