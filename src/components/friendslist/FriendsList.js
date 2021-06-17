import React, { useEffect, useState } from 'react';
import {
	Friend,
	FriendGrid,
	FriendImage,
	FriendsContainer,
} from './FriendsListStyles';

const FriendsList = ({ userFriends }) => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		// turn object into array to map through
		Object.keys(userFriends).forEach((friend) => {
			setFriends([userFriends[friend]]);
		});
	}, [userFriends]);

	return (
		<FriendsContainer>
			<span>Friends</span>
			<FriendGrid>
				{friends.map((friend) => (
					<Friend key={friend.uid}>
						<a href={`/user/${friend.uid}`}>
							<FriendImage src={friend.profilePic} alt='' />
							<span>{friend.name}</span>
						</a>
					</Friend>
				))}
			</FriendGrid>
		</FriendsContainer>
	);
};

export default FriendsList;
