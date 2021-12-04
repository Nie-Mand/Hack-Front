import { graphql } from '@apollo/client/react/hoc'
import client from '../config/ApolloClient'

export const wrapper = (query: any, opt?: any) => graphql(query, opt)

export const clear = () => client.resetStore()
