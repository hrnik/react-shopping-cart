import React from 'react';
import ShoppingCartContainer from './ShoppingCartContainer';
import StoreContainer from './StoreContainer';

/**
 * Main container
 */
const App = () => (
	<div>
		<header className='header'>
			React Shopping cart
		</header>
		<main className='main'>
			<StoreContainer></StoreContainer>
			<ShoppingCartContainer></ShoppingCartContainer>
		</main>
	</div>
);

export default App;