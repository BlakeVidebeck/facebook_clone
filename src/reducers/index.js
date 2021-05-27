import { combineReducers } from 'redux';
import { userLoginReducer } from './userReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
});

export default reducer;
