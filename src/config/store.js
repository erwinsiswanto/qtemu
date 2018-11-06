import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import memberReducer from '../reducers/member';
import appReducer from '../reducers/app';
import eventReducer from '../reducers/event';

const reducers = combineReducers({
    member: memberReducer,
    app: appReducer,
    event: eventReducer,
});

const middleware = applyMiddleware(logger, thunk);

export default createStore(reducers, middleware);