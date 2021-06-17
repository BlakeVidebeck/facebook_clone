import styled from 'styled-components';

export const ProfileTabsContainer = styled.div`
	display: flex;
	width: 50%;
	height: 60px;
	justify-content: space-evenly;
	align-items: center;
	border: none;
`;

export const ProfileTab = styled.div`
	padding: 16px;
	min-height: 16px;
	height: 40px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;

	&:hover {
		border-radius: 5px;
		background-color: white;
	}

	&.${(props) => props.activeClassName} {
		border-bottom: 4px solid #2e81f4;
	}
`;
