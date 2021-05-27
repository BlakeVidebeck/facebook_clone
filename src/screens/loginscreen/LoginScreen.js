import React from 'react';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../../actions/userActions';

import { Button } from '@material-ui/core';

import './LoginScreen.css';

const LoginScreen = () => {
	const dispatch = useDispatch();

	const signIn = (e) => {
		e.preventDefault();
		dispatch(signInWithGoogle());
	};

	return (
		<div className='login'>
			<div className='login_logo'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
					alt=''
				/>
				<img
					src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
					alt=''
				/>
			</div>
			<Button type='submit' onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
};

export default LoginScreen;
