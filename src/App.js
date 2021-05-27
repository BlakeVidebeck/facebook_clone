import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import Spinner from './components/spinner/Spinner';
import HomeScreen from './screens/homescreen/HomeScreen';
import LoginScreen from './screens/loginscreen/LoginScreen';

import './App.css';

function App() {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Suspense fallback={<Spinner />}>
						<Route
							exact
							path='/login'
							render={() => (userInfo ? <Redirect to='/' /> : <LoginScreen />)}
						/>
						<Route
							exact
							path='/'
							render={() =>
								!userInfo ? <Redirect to='/login' /> : <HomeScreen />
							}
						/>
					</Suspense>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
