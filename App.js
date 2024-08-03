import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCustomerForm from './components/CreateCustomerForm';
import CustomerDetails from './components/CustomerDetails';
import UpdateCustomerForm from './components/UpdateCustomerForm';
import CreateProductForm from './components/CreateProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import UpdateProductForm from './components/UpdateProductForm';
import PlaceOrderForm from './components/PlaceOrderForm';
import OrderDetails from './components/OrderDetails';
import TrackOrderStatus from './components/TrackOrderStatus';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Customer Routes */}
        <Route path="/create-customer" component={CreateCustomerForm} />
        <Route path="/customer/:id" component={CustomerDetails} />
        <Route path="/update-customer/:id" component={UpdateCustomerForm} />
        
        {/* Product Routes */}
        <Route path="/create-product" component={CreateProductForm} />
        <Route path="/products" component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/update-product/:id" component={UpdateProductForm} />
        
        {/* Order Routes */}
        <Route path="/place-order" component={PlaceOrderForm} />
        <Route path="/order/:id" component={OrderDetails} />
        <Route path="/track-order/:id" component={TrackOrderStatus} />
        
        {/* You can add a default route for home or a not-found page */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default App;
