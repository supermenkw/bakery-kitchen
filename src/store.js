import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from './reducers/index';
import ingredientsReducer from './reducers/ingredientsReducer';

const middlewares = applyMiddleware(reduxLogger);

const store = createStore(rootReducer, middlewares);

export default store;