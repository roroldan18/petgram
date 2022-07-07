import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
//Importo Apollo y React Apollo
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache, HttpLink, from } from "@apollo/client";
import { AuthProvider } from './Context';
import { onError } from '@apollo/client/link/error';

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token');
  if(token){
    operation.setContext({
      headers: { 
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation);
}) 


const errorMiddleware = onError(
  ({networkError}) => {
    if(networkError){
      sessionStorage.removeItem('token');
      window.location.href = '/';
    }
  }
)

const client = new ApolloClient({
  //Uri es donde tengo el servidor de graphql
  cache: new InMemoryCache(),
  link: from([
    authMiddleware,
    errorMiddleware,
    new HttpLink({
      uri: "https://petgram-server-clgg.vercel.app/graphql",
    })
  ])
});



const container = document.getElementById('app');
const app = createRoot(container as Element);

app.render(
    <AuthProvider>
      <ApolloProvider client={client}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ApolloProvider>
    </AuthProvider>
);
