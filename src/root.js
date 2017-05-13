import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const Root = ({ store }) =>
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
;

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
