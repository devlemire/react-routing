import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Checkout from './components/Checkout/Checkout';
import Details from './components/Details/Details';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ Store } path="/store" />
    <Route component={ Checkout } path="/checkout" />
    <Route component={ Details } path="/details/:id" />
  </Switch>
)

