import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rocketList from './rockets/rockets';

const rootReducer = combineReducers({
  rocketList,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
