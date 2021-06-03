import styled from 'styled-components';

export const SidebarRowContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	cursor: pointer;

	&:hover {
		background-color: lightgray;
		border-radius: 10px;
	}

	h4 {
		margin-left: 20px;
		font-weight: 600;
	}

	& > .MuiSvgIcon-root {
		font-size: xx-large;
		color: #2e81f4;
	}
`;
