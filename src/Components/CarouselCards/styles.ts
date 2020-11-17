import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
margin: 15% auto 10%;
left: 0px;
background: #363636 0% 0% no-repeat padding-box;
opacity: 1;
display: flex;
justify-content: center;

svg{
    color: #FFF;
    margin: 148px auto;
    cursor: pointer;
}

@media(max-width: 768px){
    margin: 40% auto 375px;

    svg{
        display: none;
    }
}

@media(min-width: 1900px){
    margin: 10% auto 10%;
}
`;

export const Cards = styled.div `
display: flex;
justify-content: center;
gap: 5%;

@media(max-width: 768px){
    display: grid;
    gap: 10%;
}

`;

export const Card1 = styled.div `
width: 300px;
height: 435px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #FFFFFF63;
border-radius: 27px;
opacity: 0.8;
display: flex;
justify-content: center;

&:hover{
    height: 440px;
    width: 305px;
    opacity: 1;
    cursor: pointer;
}

@media(max-width: 768px){
    opacity: 1;
}
`;

export const GrantCard = styled.div `
width: 250px;
margin: -65px auto 0px;
height: 325px;
background: #363636 0% 0% no-repeat padding-box;
border-radius: 60px;
border: 2px solid #FFFFFF;
opacity: 1;
position: absolute;
display: inline-grid;
justify-content: center;

img{
    width: 274px;
    height: 368px;
    margin-top: -39px;
}

p{
    font-size: 15px;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    padding: 10px 20px;
}
`;

export const Card2 = styled.div `
width: 300px;
height: 435px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #FFFFFF63;
border-radius: 27px;
opacity: 0.8;
display: flex;
justify-content: center;

&:hover{
    height: 440px;
    width: 305px;
    opacity: 1;
    cursor: pointer;
}

@media(max-width: 768px){
    opacity: 1;
}
`;

export const RedCard = styled.div `
width: 250px;
margin: -65px auto 0px;
height: 325px;
background: #363636 0% 0% no-repeat padding-box;
border-radius: 60px;
border: 2px solid #FFFFFF;
opacity: 1;
position: absolute;
display: inline-grid;
justify-content: center;

img{
    width: 274px;
    height: 368px;
    margin-top: -39px;
}

p{
    font-size: 15px;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    padding: 10px 20px;
}
`;


export const Card3 = styled.div `
width: 300px;
height: 435px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #FFFFFF63;
border-radius: 27px;
opacity: 0.8;
display: flex;
justify-content: center;

&:hover{
    height: 440px;
    width: 305px;
    opacity: 1;
    cursor: pointer;
}

@media(max-width: 768px){
    opacity: 1;
}
`;

export const SybilCard = styled.div `
width: 250px;
margin: -65px auto 0px;
height: 325px;
background: #363636 0% 0% no-repeat padding-box;
border-radius: 60px;
border: 2px solid #FFFFFF;
opacity: 1;
position: absolute;
display: inline-grid;
justify-content: center;

img{
    width: 274px;
    height: 368px;
    margin-top: -39px;
}

p{
    font-size: 15px;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    padding: 10px 20px;
}
`;
