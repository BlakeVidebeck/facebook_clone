import styled from 'styled-components';

export const MessageSenderContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
	width: 100%;
`;

export const MessageSenderTop = styled.div`
	display: flex;
	border-bottom: 1px solid #eff2f5;
	padding: 15px;
`;

export const MessageSenderForm = styled.form`
	flex: 1;
	display: flex;
`;

export const MessageSenderFormInput = styled.input`
	outline-width: 0;
	border: none;
	padding: 5px 20px;
	margin: 0 10px;
	border-radius: 999px;
	background-color: #eff2f5;
	flex: 1;
`;

export const MessageSenderFormButton = styled.button`
	display: none;
`;

export const MessageSenderBottom = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const MessageSenderOption = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	color: gray;
	margin: 5px;

	h3 {
		font-size: medium;
		margin-left: 10px;
		cursor: pointer;
	}

	&hover {
		background-color: #eff2f5;
		border-radius: 20px;
	}
`;
