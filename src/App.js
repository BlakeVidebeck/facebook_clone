import { useEffect, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import { auth } from './firebase';

import HomeScreen from './screens/homescreen/HomeScreen';
import LoginScreen from './screens/loginscreen/LoginScreen';

import './App.css';

function App() {
	const { setUser, user } = useContext(GlobalContext);
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser(authUser);
			} else {
				setUser(null);
			}
		});
	}, []);
	return <div className='app'>{!user ? <LoginScreen /> : <HomeScreen />}</div>;
}

export default App;
