import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyD8gyxYNEMOQmlJhg1ip2Uj95MqSTxcDB0',
	authDomain: 'facebook-clone-1ab82.firebaseapp.com',
	projectId: 'facebook-clone-1ab82',
	storageBucket: 'facebook-clone-1ab82.appspot.com',
	messagingSenderId: '45902878744',
	appId: '1:45902878744:web:1cf8391c970b62e8664b6d',
	measurementId: 'G-7V1CCS2XMG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
