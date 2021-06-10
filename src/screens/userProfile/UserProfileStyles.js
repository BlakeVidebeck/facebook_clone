import styled from 'styled-components';

export const ProfileContainer = styled.div`
	width: 60%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

export const TopSection = styled.div`
	height: 70%;
	background-color: #f1f2f5;
`;

export const Cover = styled.div`
	height: 50vh;
	background: black;
	border-bottom-left-radius: 0.5%;
	border-bottom-right-radius: 0.5%;
`;

export const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: -150px;
	width: 20%;
	padding-bottom: 20px;

	h2 {
		font-size: 30px;
	}
`;

export const AvatarName = styled.div`
	width: 110%;
`;

export const ProfilePic = styled.div`
	width: 100%;

	& > img {
		object-fit: contain;
		width: 100%;
		border-radius: 100px;
	}
`;

export const ProfileOptions = styled.div`
	border-top: 1px solid gray;
	width: 95%;
	margin: 0 auto;
	display: flex;
`;

export const BottomSection = styled.div`
	display: flex;
	width: 95%;
	margin: 20px auto;
`;

export const BottomRight = styled.div`
	width: 60%;
	margin-left: 5px;
`;

export const ProfileFeed = styled.div``;

export const BottomLeft = styled.div`
	width: 40%;
	margin-right: 5px;
`;
