import { combineReducers } from 'redux';
import {
	userLoginReducer,
	userDetailsReducer,
	userPostsReducer,
} from './userReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userDetails: userDetailsReducer,
	userPosts: userPostsReducer,
});

export default reducer;
