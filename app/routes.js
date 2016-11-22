import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppWrapper from './components/app-wrapper';
import HomeContainer from './modules/home/containers/home-container';
import ContactContainer from './modules/contact/containers/contact-container';

export default (
  <Route path='/' component={AppWrapper}>
    <IndexRoute component={HomeContainer} />
    <Route path='contact' component={ContactContainer} />
  </Route>
);
