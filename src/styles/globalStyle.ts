import { createGlobalStyle } from 'styled-components';
import githubBackground from '../static/github-background.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        appearance: none;
        box-sizing: border-box;

    }
    #root{
        background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;

    }
    html, body, #root {
        top: 0;
        position: fixed;

        min-width: 260px;
        width: 100%;

        height: 100vh;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
    }
    ul {
        list-style: none;
    }
    body, input, button {
        color: ${props => props.theme.colors.text};
        font-size: 16;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    button {
        cursor: pointer;
        * {
            pointer-events: none;
        }
    }
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.text};
    }
`;
