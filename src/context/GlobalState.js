import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { auth, provider } from '../firebase';

const initialState = {
	user: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component - to let other components use the state
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// actions
	const signIn = async () => {
		try {
			await auth.signInWithPopup(provider);
		} catch (err) {
			alert(err.message);
		}
	};

	const setUser = (user) => {
		dispatch({
			type: 'SET_USER',
			payload: user,
		});
	};

	return (
		<GlobalContext.Provider value={{ user: state.user, signIn, setUser }}>
			{children}
		</GlobalContext.Provider>
	);
};
