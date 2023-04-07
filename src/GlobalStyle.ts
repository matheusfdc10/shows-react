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
    line-height: 62.5%;

    @media (max-width: 1230px) {
      font-size: 58.5%;
      line-height: 58.5%;
    }

    @media (max-width: 1030px) {
      font-size: 54.5%;
      line-height: 64.5%;
    }

    @media (max-width: 830px) {
      font-size: 50.5%;
      line-height: 50.5%;
    }

    @media (max-width: 630px) {
      font-size: 46.5%;
      line-height: 46.5%;
    }
    
    @media (max-width: 420px) {
      font-size: 42.5%;
      line-height: 42.5%;
    }
  }

  body {
    font-size: 1.6rem;
    line-height: 1.6rem;
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
    // margin-top: 90px;
    margin-top: 9rem;
  }
`