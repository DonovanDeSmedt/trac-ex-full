import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configure-store';
import Root from './root';
import rootReducer from './reducers';

const store = configureStore(rootReducer);

const renderApp = (RootCmp) => {
  render(
    <AppContainer>
      <RootCmp store={store} />
    </AppContainer>
    , document.getElementById('root')
  );
};

if (module.hot) {
  // hot reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default); // eslint-disable-line global-require
  });
  // hot reload component will trigger a console error:
  // Warning: [react-router] You cannot change <Router routes>; it will be ignored
  // you can include a regex to the console filter: ^((?!You cannot change \<Router routes\>).)*$
  module.hot.accept('./root', () => {
    renderApp(require('./root').default); // eslint-disable-line global-require
  });
}

renderApp(Root);
