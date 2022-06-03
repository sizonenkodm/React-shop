import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Header';
import Shop from './layout/Shop';
import ContextProvider from './context';

function App() {
	return (
		<>
			<Header />
			<ContextProvider>
				<Shop />
			</ContextProvider>
			<Footer />
		</>
	);
}

export default App;
