import React from 'react';
import { useDispatch } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { FriendsTabsContainer, FriendTab } from './FriendTabStyles';
import { addFriend } from '../../actions/userActions';

const FriendTabs = ({ friend, userInfo: { user } }) => {
	const dispatch = useDispatch();

	const addFriendHandler = (friend, user) => {
		dispatch(addFriend(friend, user));
	};

	return (
		<FriendsTabsContainer>
			<FriendTab onClick={(e) => addFriendHandler(friend, user)}>
				<PersonAddIcon />
				<span>Add Friend</span>
			</FriendTab>
			{/* <FriendTab>Message</FriendTab> */}
		</FriendsTabsContainer>
	);
};

export default FriendTabs;
