const userLoginReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'USER_LOGIN_REQUEST':
			return { loading: true };
		case 'USER_LOGIN_SUCCESS':
			return { loading: false, userInfo: payload };
		case 'USER_LOGIN_FAIL':
			return { loading: false, error: payload };
		case 'USER_LOGOUT':
			return {};
		default:
			return state;
	}
};

const userDetailsReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'USER_DETAILS_REQUEST':
			return { ...state, loading: true };
		case 'USER_DETAILS_SUCCESS':
			return { loading: false, user: payload };
		case 'USER_DETAILS_FAIL':
			return { loading: false, error: payload };
		case 'USER_DETAILS_RESET':
			return { user: {} };
		default:
			return state;
	}
};

const userPostsReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'USER_POSTS_REQUEST':
			return { ...state, loading: true };
		case 'USER_POSTS_SUCCESS':
			return { loading: false, posts: payload };
		case 'USER_POSTS_FAIL':
			return { loading: false, error: payload };
		default:
			return state;
	}
};

export { userLoginReducer, userDetailsReducer, userPostsReducer };
