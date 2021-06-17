import styled from 'styled-components';

export const FriendsTabsContainer = styled.div`
	display: flex;
	width: 50%;
	height: 60px;
	justify-content: flex-end;
	align-items: center;
	border: none;
`;

export const FriendTab = styled.button`
	padding: 16px;
	margin-left: 15px;
	min-height: 16px;
	height: 40px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	background-color: #2e81f4;
	color: white;

	& > span {
		margin-left: 10px;
	}

	&:hover {
		background-color: gray;
	}
`;
