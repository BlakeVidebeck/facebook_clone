import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
	color: black;
	margin: auto 0;
}

body {
  background-color: #f1f2f5;
}
`;
