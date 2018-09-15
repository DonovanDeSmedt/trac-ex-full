import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from '../utils/loadable';

const AsyncJoke = Loadable({
  loader: () =>
    import(/* webpackChunkName: "joke" */ '../joke/components/joke'),
});

const App = () => (
  <div>
    <Route exact={true} path="/" component={AsyncJoke} />
  </div>
);

export default App;
