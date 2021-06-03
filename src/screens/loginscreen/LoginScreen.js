import React from 'react';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../../actions/userActions';

import { Button } from '@material-ui/core';
import { ReactComponent as Logo } from '../../assets/Facebook-Logo.svg';

import { LoginContainer } from './LoginScreenStyles';

const LoginScreen = () => {
	const dispatch = useDispatch();

	const signIn = (e) => {
		e.preventDefault();
		dispatch(signInWithGoogle());
	};

	return (
		<LoginContainer>
			<Logo />
			<Button type='submit' onClick={signIn}>
				Sign In
			</Button>
		</LoginContainer>
	);
};

export default LoginScreen;
