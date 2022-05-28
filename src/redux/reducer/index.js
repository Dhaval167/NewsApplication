import {combineReducers} from 'redux';

//Imports:Reducers
import apiReducer from './ApiReducer';
import stateReducer from './state-reducer';

const rootReducer = combineReducers({apiReducer, stateReducer});

//Exports
export default rootReducer;
