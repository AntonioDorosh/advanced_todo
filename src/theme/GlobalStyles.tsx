import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
    *,
    *:before,
    *:after {
     margin: 0;
     padding: 0;
     border: 0;
     box-sizing: border-box;
    }
    body {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text}
    }
`;

export default Global