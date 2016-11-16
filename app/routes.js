import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppWrapper from './components/app-wrapper';
import HomeContainer from './containers/home/home-container';
import ContactContainer from './containers/contact/contact-container';

export default (
  <Route path="/" component={AppWrapper}>
    <IndexRoute component={HomeContainer} />
    <Route path="contact" component={ContactContainer} />
  </Route>
);
