import { render } from 'react-dom'
import { StrictMode } from 'react'
import App from './app'
import client from './config/ApolloClient'
import { ApolloProvider } from '@apollo/client'
import { ContextProvider } from './config/auth.context'

render(
  <StrictMode>
    <ContextProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ContextProvider>
  </StrictMode>,
  document.getElementById('app')
)
