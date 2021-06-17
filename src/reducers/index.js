import { combineReducers } from 'redux';
import {
	userLoginReducer,
	userDetailsReducer,
	userPostsReducer,
	userFriendReducer,
} from './userReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userDetails: userDetailsReducer,
	userPosts: userPostsReducer,
	userFriend: userFriendReducer,
});

export default reducer;
