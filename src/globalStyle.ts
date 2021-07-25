import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: lightgreen;
  }

  input:focus {
    outline: 0;
  }
`