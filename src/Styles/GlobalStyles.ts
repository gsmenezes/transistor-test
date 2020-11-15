import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, border-style, #root{
    background-color: #363636;
    overflow: auto;

    ::-webkit-scrollbar{
width: 8px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #00000029;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track{
        background-color: #707070;
    }
}

*, button, input {
    border: 0;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
    text-transform: uppercase;
}

`