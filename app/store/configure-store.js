import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import DevTools from '../components/dev-tools';
import rootReducer from '../reducers';

const logger = createLogger({});

export default function configureStore() {
  let createStoreWithMiddleware;

  if (__DEV__) {
    createStoreWithMiddleware = compose(
      applyMiddleware(
        thunk,
        logger
      ),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
    )(createStore);
  } else {
    createStoreWithMiddleware = compose(
     applyMiddleware(thunk)
   )(createStore);
  }

  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers'); // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
