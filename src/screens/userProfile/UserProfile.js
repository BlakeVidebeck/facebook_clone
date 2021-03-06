import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserDetails } from '../../actions/userActions';
import MessageSender from '../../components/messagesender/MessageSender';
import Header from '../../components/header/Header';

import FriendsList from '../../components/friendslist/FriendsList';
import ProfileTabs from '../../components/profiletabs/ProfileTabs';
import ProfilePosts from '../../components/profileposts/ProfilePosts';
import {
	AvatarContainer,
	AvatarName,
	BottomLeft,
	BottomRight,
	BottomSection,
	Cover,
	ProfileContainer,
	ProfileFeed,
	ProfileOptions,
	ProfilePic,
	TopSection,
} from './UserProfileStyles';
import FriendTabs from '../../components/friendtabs/FriendTabs';

const UserProfile = ({ history, location }) => {
	const [username, setUsername] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const [userFriends, setUserFriends] = useState({});

	const dispatch = useDispatch();

	// get user details from the user state
	const userDetails = useSelector((state) => state.userDetails);
	const { loading, user } = userDetails;

	// get user info from the user login state to make sure they are logged in
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUid = location.pathname.split('/')[2];

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		} else {
			if (!user || !user.username || userUid !== user.uid) {
				dispatch(getUserDetails(userUid));
			} else {
				setUsername(user.username);
				setProfilePic(user.profilePic);
				setUserFriends(user.friends);
				window.scrollTo(0, 0);
			}
		}
	}, [dispatch, history, userInfo, userUid, user]);

	console.log('render profile');

	return (
		<>
			<Header />
			<ProfileContainer>
				{loading && 'Loading'}
				<TopSection>
					<Cover>
						<span>cover photo</span>
					</Cover>
					<AvatarContainer>
						<ProfilePic>
							<img src={profilePic} alt='' />
						</ProfilePic>
						<AvatarName>
							<h2>{username}</h2>
						</AvatarName>
					</AvatarContainer>

					<ProfileOptions>
						<ProfileTabs />
						<FriendTabs friend={user} userInfo={userInfo} />
					</ProfileOptions>
				</TopSection>

				<BottomSection>
					<BottomLeft>
						<FriendsList userFriends={userFriends} />
					</BottomLeft>

					<BottomRight>
						<ProfileFeed>
							{userUid === userInfo.user.uid && <MessageSender />}
							<ProfilePosts userUid={userUid} />
						</ProfileFeed>
					</BottomRight>
				</BottomSection>
			</ProfileContainer>
		</>
	);
};

export default UserProfile;
