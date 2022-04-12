import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rocket: rocketReducer,
  missions: missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
