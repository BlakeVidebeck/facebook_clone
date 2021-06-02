import { combineReducers } from 'redux';
import { userLoginReducer, userDetailsReducer } from './userReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userDetails: userDetailsReducer,
});

export default reducer;
