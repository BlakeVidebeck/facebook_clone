import styled from 'styled-components';

export const PostContainer = styled.div`
	width: 100%;
	margin-top: 15px;
	border-radius: 15px;
	background-color: white;
	box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 075);
`;

export const PostTop = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	padding: 15px;
`;

export const PostAvatar = styled.div`
	margin-right: 10px;
`;

export const PostTopInfo = styled.div`
	h3 {
		font-size: medium;
	}

	p {
		font-size: small;
		color: gray;
	}
`;

export const PostBottom = styled.div`
	margin: 10px 0;
	padding: 15px 25px;
`;

export const PostImage = styled.div`
	img {
		width: 100%;
	}
`;

export const PostOptions = styled.div`
	padding-top: 10px;
	border-top: 1px solid lightgray;
	display: flex;
	justify-content: space-evenly;
	font-size: medium;
	color: gray;
	cursor: pointer;
	padding: 15px;
`;

export const PostOption = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	flex: 1;

	p {
		margin-left: 10px;
	}

	&:hover {
		background-color: #eff2f5;
		border-radius: 10px;
	}
`;
