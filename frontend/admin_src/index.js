import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { BrowserRouter } from "react-router-dom";
import App from './App';

// import { onError } from "@apollo/client/link/error";

// const link = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     );

//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

const client = new ApolloClient({
    link: createUploadLink({
    uri: "http://api.localhost:8000/",
      }),
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