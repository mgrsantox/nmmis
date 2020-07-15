import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import {ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import App from './App.jsx';

const client = new ApolloClient({
	uri: "http://api.localhost:8000/",
	cache: new InMemoryCache()
})

ReactDOM.render(
	<StrictMode>
		<ApolloProvider client={client}>
			<App/> 
		</ApolloProvider>
	</StrictMode>,
	document.getElementById('wrapper'));