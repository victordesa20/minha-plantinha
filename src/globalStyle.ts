import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }

  a {
    color: #ffffffe0;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff;
  }

  input:focus {
    outline: 0;
  }
`