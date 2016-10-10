import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import {getProducts} from './actions/StoreAction'
import {loadState, saveState} from './utils/localStorage';

//load state from localStorage
const savedState = loadState();
const store = configureStore(savedState);

//save state to localStorage after update
store.subscribe(()=> {
	saveState(store.getState());
});

//get all products for fake add btn's
store.dispatch(getProducts());

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);