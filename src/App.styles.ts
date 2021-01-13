import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from './images/background.jpg'


export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Courier New', serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   > p {
    color: #000;
    font-weight: 'bold';
    font-size: 18px;
  }
  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-image: linear-gradient(180deg, #fff, #D682EB);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
    align-self: 'center';
    justify-self: 'center';
  }
`;