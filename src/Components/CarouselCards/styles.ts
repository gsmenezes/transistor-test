import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
margin: 8% auto 10%;
left: 0px;
background: #363636;
opacity: 1;
display: flex;
justify-content: center;


@media(min-width: 1900px){
    margin: 10% auto 10%;
}

`;

export const Item = styled.div `
width: 300px;
height: 505px;
background: #FFFFFF;
box-shadow: 0px 3px 6px #FFFFFF63;
border-radius: 27px;
opacity: 0.8;
display: flex;
justify-content: center;
padding: 10px 2px 5px;

&:hover{
    height: 510px;
    width: 305px;
    opacity: 1;
    cursor: pointer;
}

@media(max-width: 768px){
    opacity: 1;
}
`;

export const PersonCard = styled.div `
width: 250px;
margin: -13px auto 0px;
height: 335px;
background: #363636;
border-radius: 60px;
border: 2px solid #FFFFFF;
opacity: 1;
position: absolute;
display: inline-grid;
justify-content: center;

img{
    width: 275px;
    height: 345px;
    margin-top: -8px;
}

p{
    font-size: 15px;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    padding: 10px 20px;
}
`;


