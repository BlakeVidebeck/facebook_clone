import styled from 'styled-components';

export const FriendsContainer = styled.div`
	border-radius: 8px;
	background-color: white;
	box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
	padding: 16px;
`;

export const FriendGrid = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-top: 16px;
`;

export const Friend = styled.div`
	width: calc(33.3% - 7.3px);
	margin-bottom: 12px;
	display: flex;
	flex-direction: column;
`;

export const FriendImage = styled.img`
	width: 102px;
	height: 102px;
	border-radius: 8px;
	object-fit: cover;
`;
