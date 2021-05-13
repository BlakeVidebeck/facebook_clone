const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_USER':
			return {
				...state,
				user: payload,
			};
		default:
			return state;
	}
};

export default reducer;
