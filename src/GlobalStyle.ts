import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: #f5f5f5;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container-main {
    flex: 1;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
  }
`