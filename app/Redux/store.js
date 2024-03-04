import { applyMiddleware, createStore } from 'redux';
import rootReducer from './index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './CounterSaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware)
)// Create the Redux store with your root reducer
sagaMiddleware.run(rootSaga); // Run your root saga
export default store;
