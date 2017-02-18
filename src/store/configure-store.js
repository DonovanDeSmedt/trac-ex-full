import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({});

export default function configureStore(rootReducer) {
  let createStoreWithMiddleware;

  if (__DEV__) {
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    createStoreWithMiddleware = composeEnhancers(
      applyMiddleware(
        thunk,
        logger,
      ),
    )(createStore);
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(thunk),
   )(createStore);
  }

  return createStoreWithMiddleware(rootReducer);
}
