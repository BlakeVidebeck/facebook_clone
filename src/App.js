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
import UserProfile from './screens/userProfile/UserProfile';

import { GlobalStyle } from './globalStyles';

const App = () => {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	return (
		<>
			<Router>
				<GlobalStyle />
				<Switch>
					<Suspense fallback={<Spinner />}>
						<Route path='/user/:userId' component={UserProfile}></Route>
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
			</Router>
		</>
	);
};

export default App;
