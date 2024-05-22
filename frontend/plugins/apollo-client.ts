import { defineNuxtPlugin } from "#app";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { setContext } from '@apollo/client/link/context';

export default defineNuxtPlugin((nuxtApp) => {
  const httpLink = createHttpLink({
    uri: "http://localhost:8000/graphql", // Replace with your Laravel GraphQL endpoint
  });

  const authLink = setContext((_, {headers}) => {
    const authStore = useLogin()

    return {
      headers:{
        ...headers,
        authorization: authStore.token? `Bearer ${authStore.token}` : "" 
      }
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  nuxtApp.provide("apollo", apolloClient);
});
