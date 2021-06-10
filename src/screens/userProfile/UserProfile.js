import React, { useEffect } from 'react';
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
			<ProfileContainer>
				{loading && 'Loading'}
				<TopSection>
					<Cover>
						<span>cover photo</span>
					</Cover>
					<AvatarContainer>
						<ProfilePic>
							<img src={user.photoURL} alt='' />
						</ProfilePic>
						<AvatarName>
							<h2>{user.displayName}</h2>
						</AvatarName>
					</AvatarContainer>

					<ProfileOptions>
						<ProfileTabs />
					</ProfileOptions>
				</TopSection>

				<BottomSection>
					<BottomLeft>
						<FriendsList />
					</BottomLeft>

					<BottomRight>
						<ProfileFeed>
							<MessageSender />
							<ProfilePosts />
						</ProfileFeed>
					</BottomRight>
				</BottomSection>
			</ProfileContainer>
		</>
	);
};

export default UserProfile;
