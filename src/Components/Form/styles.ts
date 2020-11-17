import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
height: 740px;
background: transparent linear-gradient(143deg, #7DEDE2 0%, #58B790 100%) 0% 0% no-repeat padding-box;
opacity: 1;
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 8%;
`;

export const ContainerForm = styled.div `
width: 65%;
/* 882px */
margin: 0 auto;
height: 110%;
/* 800px */
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 6px #0000004D;
opacity: 1;
border-radius: 8px;
padding: 6% 8%;
/* 80px 120px*/

button{
width: 35%;
/*240px*/
height: 48px;
background: #63C7A9 0% 0% no-repeat padding-box;
opacity: 1;
color: #FFF;
text-transform: uppercase;
font-size: 18px;
letter-spacing: 0px;
opacity: 1;
margin-top: 5%;
}

@media(max-width: 768px){
    width: 80%;
    height: 105%;
    padding: 5% 6%;

    button{
        width: 100%;
    }
}
`;

export const TitleForm = styled.h1`
font-family:'Montserrat', sans-serif;
font-weight: bold;
font-size: 35px;
letter-spacing: -0.88px;
text-align: center;
color: #63C7A9;
opacity: 1;
text-transform: uppercase;

@media(max-width: 768px){
    font-size: 30px;
}

`;

export const TextForm = styled.p `
font-weight: normal;
font-size: 20px;
letter-spacing: 0px;
text-align: left;
color: #363636;
opacity: 1;
padding: 5% 0;

@media(max-width: 768px){
    font-size: 17px;
    padding: 8% 0 12%;
}
`;

export const FormContact = styled.div `
width: 100%;
text-align: left;
padding: 3% 10%;
position: relative;

@media(max-width: 768px){
    padding: 6% 4%;
}
`;

export const FormInfo = styled.div `
display: flex;
width: 100%;
column-gap: 9%;
/*20px*/

@media(max-width: 768px){
    display: inline;
    column-gap: 0%;
}
`;

export const FormInfoName = styled.div `

input{
    padding: 10px;
    margin-bottom: 22px;
    width: 108%;
    border-radius: 2px;
    color: #363636;
    border: 1px solid #363636;
    font-size: 18px;
    text-align: left;
    text-transform: capitalize;
    height: 42px;
}

label {
    position: absolute;
    pointer-events: none;
    color: #363636;
    left: 10%;
    top: -1%;
}

.error{
    color: red;
    font-size: 12px;
    margin-top: -7%;
}

@media(max-width: 768px){

    input{
        padding: 8px;
        width: 100%;
        font-size: 16px;
    }

    label{
        left: 4%;
        top: -2%;
    }

    .error{
        margin-top: -7%;
    }
}

`;

export const FormInfoEmail = styled.div `

input{
    padding: 10px 10px;
    margin-bottom: 22px;
    width: 115%;
    border-radius: 2px;
    color: #363636;
    border: 1px solid #363636;
    font-size: 18px;
    text-align: left;
    height: 42px;
}

label {
    position: absolute;
    pointer-events: none;
    color: #363636;
    left: 51%;
    top: -1%;
}


.error{
    color: red;
    font-size: 12px;
    margin-top: -7%;
}

@media(max-width: 768px){
   margin-top: 9%;

    input{
        padding: 8px;
        width: 100%;
        font-size: 16px;
    }

    label{
        left: 4%;
        top: 18%;
    }

    .error{
        margin-top: -7%;
    }
}
`;

export const MessageBox = styled.div `
margin-top: 6%;

textarea{
    padding: 10px;
    width: 100% !important; 
    border-radius: 2px;
    color: #363636;
    border: 1px solid #363636;
    font-size: 18px;
    text-align: left;
    resize: none;
}

label{
    left: 10%;
    top: 27%;
}

.error{
    color: red;
    font-size: 12px;
}

@media(max-width: 768px){
   margin-top: 7%;
   margin-bottom: 5%;

    textarea{
        padding: 8px;
        font-size: 16px;
    }
}
`;