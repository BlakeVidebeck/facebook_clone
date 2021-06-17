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

		const currentUser = await db
			.collection('users')
			.doc(user.uid)
			.get()
			.then((snapshot) => {
				if (snapshot.exists) {
					return true;
				}
			});

		if (!currentUser) {
			db.collection('users').doc(user.uid).set({
				uid: user.uid,
				username: user.displayName,
				profilePic: user.photoURL,
				friends: {},
			});
		}

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

export const getUserPosts = (uid) => async (dispatch) => {
	try {
		dispatch({
			type: 'USER_POSTS_REQUEST',
		});

		db.collection('posts')
			.where('uid', '==', uid)
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				dispatch({
					type: 'USER_POSTS_SUCCESS',
					payload: snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					})),
				})
			);
	} catch (error) {
		dispatch({
			type: 'USER_POSTS_FAIL',
			payload: error.message,
		});
	}
};

export const addFriend = (friend, user) => async (dispatch) => {
	try {
		dispatch({
			type: 'USER_FRIEND_REQUEST',
		});

		const newFriend = await db
			.collection('users')
			.doc(user.uid)
			.update({
				['friends.' + friend.uid]: {
					uid: friend.uid,
					name: friend.username,
					profilePic: friend.profilePic,
				},
			});

		await db
			.collection('users')
			.doc(friend.uid)
			.update({
				['friends.' + user.uid]: {
					uid: user.uid,
					name: user.displayName,
					profilePic: user.photoURL,
				},
			});

		dispatch({
			type: 'USER_FRIEND_SUCCESS',
			payload: newFriend,
		});
	} catch (error) {
		dispatch({
			type: 'USER_FRIEND_FAIL',
			payload: error.message,
		});
	}

	// find user in db
	// save friend details (name, pic, uid) in db
};
