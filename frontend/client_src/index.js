import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx';
import ZoomContextProvider from './contexts/zoom-context.js';
import CenterContextProvider from './contexts/center-context.js';
import ToggleContextProvider from './contexts/toggle-context.js';

const client = new ApolloClient({
	uri: "http://api.localhost:8000/",
	cache: new InMemoryCache()
})

ReactDOM.render(
	<StrictMode>
		<ApolloProvider client={client}>
			<ZoomContextProvider>
				<CenterContextProvider>
					<ToggleContextProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</ToggleContextProvider>
				</CenterContextProvider>
			</ZoomContextProvider>
		</ApolloProvider>
	</StrictMode>,
	document.getElementById('wrapper'));