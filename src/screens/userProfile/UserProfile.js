import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../actions/userActions';
import Header from '../../components/header/Header';

import './UserProfile.css';

const UserProfile = ({ history }) => {
	const dispatch = useDispatch();

	// get user info from the user login state to make sure they are logged in
	const userLogin = useSelector((state) => state.userLogin);
	const {
		userInfo: { user, loading },
	} = userLogin;

	useEffect(() => {
		if (!user) {
			history.push('/login');
		} else {
			dispatch(getUserDetails());
		}
	}, [dispatch, history, user]);

	return (
		<>
			<Header />
			<div className='profile'>
				{loading && 'Loading'}
				<div className='top_section'>
					{/* move to components folder */}
					<div className='cover'>
						<span>cover photo</span>
					</div>
					<div className='avatar'>
						<div className='profile_pic'>
							<img src={user.photoURL} alt='' />
						</div>
						<div className='avatar_name'>
							<h2>{user.displayName}</h2>
						</div>
					</div>

					<div className='profile_tabs'></div>
				</div>
			</div>
		</>
	);
};

export default UserProfile;
