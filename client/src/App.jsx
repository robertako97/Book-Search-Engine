import "./App.css";
import React from "react";
import { ApolloProvider } from "@apollo/client"; // Import ApolloProvider
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ApolloClient, InMemoryCache } from "@apollo/client"; // Import ApolloClient and InMemoryCache

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: "/graphql", // Your GraphQL server URI
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Navbar />
        <Outlet />
      </>
    </ApolloProvider>
  );
}

export default App;
