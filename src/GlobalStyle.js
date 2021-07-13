import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  line-height: 1.15;
  background-color: ${({ theme }) => theme.colors.background.body};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.normal}px;
  color: ${({ theme }) => theme.font.color.normal};
}

#root {
  position: relative;
  min-height: 100vh;
  max-width: 750px;
  margin: 0px auto;

}
`;

