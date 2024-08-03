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
