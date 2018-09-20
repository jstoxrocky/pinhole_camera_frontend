import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { reducer } from './store/common/reducer';

const middleware = applyMiddleware(promise(), logger);
export default createStore(reducer, middleware);
