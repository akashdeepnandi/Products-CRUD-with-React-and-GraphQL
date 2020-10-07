import { ApolloProvider } from "@apollo/client";
import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Loader,
  Navbar,
  ProductDetails,
  AddProductForm,
  EditProductForm,
  ProductList,
} from "./components";
import apolloClient from "./config/apolloClient";
import Home from "./pages/Home";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      {/* <ProductList /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-list" component={ProductList} />
        <Route path="/product-list/:id" component={ProductDetails} />
        <Route path="/loader" component={Loader} />
        <Route path="/add-product" component={AddProductForm} />
        <Route path="/edit-product/:id" component={EditProductForm} />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
