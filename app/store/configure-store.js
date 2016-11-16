import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({});

export default function configureStore(rootReducer) {
  let createStoreWithMiddleware;

  if (__DEV__) {
    createStoreWithMiddleware = compose(
      applyMiddleware(
        thunk,
        logger
      ),
      window.devToolsExtension ? window.devToolsExtension() : null
    )(createStore);
  } else {
    createStoreWithMiddleware = compose(
     applyMiddleware(thunk)
   )(createStore);
  }

  return createStoreWithMiddleware(rootReducer);
}
