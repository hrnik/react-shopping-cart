import React, {PropTypes} from 'react';
import '../styles/sync-message.css'

/**
 * Component for show syncMessage from buy action
 *
 * @param message
 * @param isError
 */
const SyncMessage = ({message, isError})=>(
	<div className={'sync-message ' +(isError ? 'sync-message--error' : 'sync-message--success')}>{message}</div>
);

SyncMessage.propTypes = {
	message: PropTypes.string,
	isError: PropTypes.bool
};

export default SyncMessage;