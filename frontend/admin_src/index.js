import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from "react-router-dom";
import App from './App';

const client = new ApolloClient({
    uri: "http://api.localhost:8000/",
    cache: new InMemoryCache()
})

ReactDOM.render(
    <StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </StrictMode>,
    document.getElementById('app'));