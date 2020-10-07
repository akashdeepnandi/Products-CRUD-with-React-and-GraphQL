import React from "react";
import { Route, Switch } from "react-router-dom";
import { Loader, Navbar, ProductDetails, ProductForm, ProductList } from "./components";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Navbar />
      {/* <ProductList /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-list" component={ProductList} />
				<Route 	path="/product-list/:id" component={ProductDetails} />
				<Route 	path="/loader" component={Loader} />
				<Route 	path="/add-product" component={ProductForm} />
				<Route 	path="/edit-product/:id" component={ProductForm} />
      </Switch>
    </>
  );
}

export default App;
