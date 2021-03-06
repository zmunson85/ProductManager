import './App.css';
import { Redirect, Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.css";

import NoProductFound from "./components/NoProductFound";
import NewProduct from "./components/NewProduct";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Update from "./components/Update"

function App() {
  return (
    <div className="container">
      <Router>
        <Redirect from="/" to="/products" noThrow="true" />
        <NewProduct path="/products/new" />
        <ProductList path="/productList" />
        <Product path="/products/:id" />
        <Default default />
        <Update path="/products/update/:id"/>
      </Router>
    </div>
  );
}

export default App;

// make sure to open new terminal on client level and npm start on the client level.
//
