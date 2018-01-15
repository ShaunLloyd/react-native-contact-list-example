import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';

import { rootReducer } from './reducer';

export const configureStore = () => {
  const store = compose(
    getMiddleware(),
    ...getEnhancers(),
  )(createStore)(rootReducer);

  return store;
};

const getMiddleware = () => {
  const logger = createLogger({ collapsed: true });
  const middleware = [
    logger,
    thunk,
  ];

  return applyMiddleware(...middleware);
};

const getEnhancers = () => ([
  devToolsEnhancer(),
]);
