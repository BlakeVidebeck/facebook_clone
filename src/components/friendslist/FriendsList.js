import React from 'react';
import {
	Friend,
	FriendGrid,
	FriendImage,
	FriendsContainer,
} from './FriendsListStyles';

const FriendsList = () => {
	return (
		<FriendsContainer>
			<span>Friends</span>
			<FriendGrid>
				<Friend>
					<a href={`firend_url`}>
						<FriendImage
							src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F72%2FMatt_Berry_Headshot.jpg%2F1200px-Matt_Berry_Headshot.jpg&f=1&nofb=1'
							alt=''
						/>
						<span>Matt Berry</span>
					</a>
				</Friend>
			</FriendGrid>
		</FriendsContainer>
	);
};

export default FriendsList;
