import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'home/containers/home-container';
import Contact from 'contact/containers/contact-container';

const App = () => (
  <div>
    <Route exact={true} path="/" component={Home} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;
