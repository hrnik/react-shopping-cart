import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

/**
 * Configure store
 * use thunk midleware
 * Enable hot replreplacementacment
 *
 * @param initialState
 * @return {Store}
 */
export default function configureStore (initialState) {
	//store with middleware call function
	const store = createStore(rootReducer,
		initialState,
		applyMiddleware(thunk)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
