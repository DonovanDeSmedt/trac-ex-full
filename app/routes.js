import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomeContainer from './containers/home/home-container';
import ContactContainer from './containers/contact/contact-container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="contact" component={ContactContainer} />
  </Route>
);
