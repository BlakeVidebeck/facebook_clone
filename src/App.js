import { useSelector } from 'react-redux';

import HomeScreen from './screens/homescreen/HomeScreen';
import LoginScreen from './screens/loginscreen/LoginScreen';

import './App.css';

function App() {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	return (
		<div className='app'>{!userInfo ? <LoginScreen /> : <HomeScreen />}</div>
	);
}

export default App;
