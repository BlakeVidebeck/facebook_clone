import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 56px;
	position: sticky;
	background-color: white;
	z-index: 100;
	top: 0;
	box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const HeaderLeft = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-left: 16px;
`;

export const LogoContainer = styled(Link)`
	margin: auto 0;
	svg {
		height: 40px;
		width: 40px;
	}
`;

export const HeaderInput = styled.div`
	display: flex;
	align-items: center;
	background-color: #eff2f5;
	padding: 10px;
	margin: auto 0;
	margin-left: 10px;
	border-radius: 999px;
	height: 30px;
`;

export const Input = styled.input`
	border: none;
	background-color: transparent;
	outline-width: 0;
	height: 40px;
	padding-right: 36px;
`;

export const HeaderCenter = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
`;

export const HeaderOption = styled(NavLink)`
	display: flex;
	align-items: center;
	padding: 0 30px;
	cursor: pointer;

	& > .MuiSvgIcon-root {
		color: gray;
	}

	&:hover {
		background-color: #eff2f5;
		border-radius: 10px;
		align-items: center;
		padding: 0 30px;
		border-bottom: none;
	}

	&:hover > .MuiSvgIcon-root {
		color: #2e81f4;
	}

	&.${(props) => props.activeClassName} {
		border-bottom: 4px solid #2e81f4;
	}

	&.${(props) => props.activeClassName} > .MuiSvgIcon-root {
		color: #2e81f4;
	}
`;

export const HeaderRight = styled.div`
	display: flex;
`;

export const HeaderInfo = styled.div`
	display: flex;
	align-items: center;

	h4 {
		margin-left: 10px;
	}
`;
