import styled from 'styled-components';

export const Container = styled.div `
left: 0;
top: 2969px;
width: 100%;
height: 410px;
background: #363636 0% 0% no-repeat padding-box;
opacity: 1;
`;

export const Button = styled.div `
display: flex;
justify-content: flex-end;
margin-right: 5%;

button{
width: 4%;
height: 45px;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
border-radius: 50%;
text-align: center;
padding: 7px;
}

@media(max-width: 600px){

margin-right: 10%;

button {
    width: 13%;
    }
}
`;