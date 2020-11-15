import styled from 'styled-components';

export const Container = styled.div`
top: 0px;
left: 0px;
width: 100%;
height: 109px;
background-color: #363636;
opacity: 1;
display: flex;
justify-content: center;
text-align: center;

img{
    width: 8%;
    height: 100%;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
}

h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 22.5px;
    letter-spacing: 0.68px;
    color: #FFFFFF;
    opacity: 1;
    text-transform: uppercase;
    width: 19%;
    margin: 40px 0 0;
}

@media(max-width: 600px){
   width: 50%;

img {
    width: 50%;
}

h1{
    font-size: 18px;
    width: -1%;
    margin: 43px 0 0;
}
}

`;