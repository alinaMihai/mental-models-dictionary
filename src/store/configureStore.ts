import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

const createEnhancer = (
  sagaMiddleware: ReturnType<typeof createSagaMiddleware>,
) => {
  const composeEnhancers = composeWithDevTools({});

  return composeEnhancers(applyMiddleware(sagaMiddleware));
};

export const configureStore = (preloadedState: Record<string, any> = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = createEnhancer(sagaMiddleware);
  const store = createStore(rootReducer, preloadedState, enhancer);
  const runSaga = async () => {
    return sagaMiddleware.run(rootSaga).toPromise();
  };

  return { store, runSaga };
};
