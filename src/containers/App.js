import React from 'react';
import ShoppingCartContainer from './ShoppingCartContainer';
import StoreContainer from './StoreContainer';

const App = () => (
	<div>
		<h1>React Shopping cart</h1>
		<StoreContainer></StoreContainer>
		<ShoppingCartContainer></ShoppingCartContainer>
	</div>
);

export default App;