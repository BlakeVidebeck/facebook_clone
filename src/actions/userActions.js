import db, { auth, provider } from '../firebase';

export const signInWithGoogle = () => async (dispatch) => {
	try {
		dispatch({
			type: 'USER_LOGIN_REQUEST',
		});

		// logins in user with firebase
		const authUser = await auth.signInWithPopup(provider);
		const { user } = authUser;

		dispatch({
			type: 'USER_LOGIN_SUCCESS',
			payload: authUser,
		});

		// saves user details in firestore
		db.collection('users').doc(user.uid).set({
			uid: user.uid,
			username: user.displayName,
			profilePic: user.photoURL,
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

export const logout = () => (dispatch) => {
	// remove the user object in local storage
	localStorage.removeItem('userInfo');
	dispatch({ type: 'USER_LOGOUT' });
};

export const getUserDetails = (uid) => async (dispatch, getState) => {
	try {
		dispatch({
			type: 'USER_DETAILS_REQUEST',
		});

		const userRef = await db.collection('users').doc(uid).get();
		const user = userRef.data();

		dispatch({
			type: 'USER_DETAILS_SUCCESS',
			payload: user,
		});
	} catch (error) {
		dispatch({
			type: 'USER_DETAILS_FAIL',
			payload: error.message,
		});
	}
};
