import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCustomerForm from './components/CreateCustomerForm';
import CustomerDetails from './components/CustomerDetails';
import UpdateCustomerForm from './components/UpdateCustomerForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-customer" component={CreateCustomerForm} />
        <Route path="/customer/:id" component={CustomerDetails} />
        <Route path="/update-customer/:id" component={UpdateCustomerForm} />
      </Switch>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateProductForm from './components/CreateProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import UpdateProductForm from './components/UpdateProductForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-product" component={CreateProductForm} />
        <Route path="/products" component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/update-product/:id" component={UpdateProductForm} />
      </Switch>
    </Router>
  );
};

export default App;
