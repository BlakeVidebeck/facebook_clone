import { auth, provider } from '../firebase';

export const signInWithGoogle = () => async (dispatch) => {
	try {
		dispatch({
			type: 'USER_LOGIN_REQUEST',
		});

		const authUser = await auth.signInWithPopup(provider);

		dispatch({
			type: 'USER_LOGIN_SUCCESS',
			payload: authUser,
		});

		// set the user object in local storage
		localStorage.setItem('userInfo', JSON.stringify(authUser));
	} catch (error) {
		dispatch({
			type: 'USER_LOGIN_FAIL',
			payload:
				// generic message && custom error message ? custom error message : generic message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
