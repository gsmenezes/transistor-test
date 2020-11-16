import styled from 'styled-components';
import backgroundImage from '../../assets/background-imagecard.svg';

export const Container = styled.div `
top: 0;
left: 0;
width: 100%;

img{
    width: 100%;
    height: 840px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 0.85;
}
`;

export const Card = styled.div `
top: 16.5%;
/* 103px*/
left: 29%;
/*392px */
width: 43%;
height: 846px;
background: transparent url(${backgroundImage}) 0% 0% no-repeat padding-box;
opacity: 1;
position: absolute;
text-align: center;
padding: 15px 0 0;

img{
    width: 90%;
    height: 80%;
    border-radius: 196px;
    opacity: 1;
    margin: 0 auto 0 6px;
}

p.title-card{
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0px;
    padding: 0 40px 8px;
}

p.phrase{
    text-align: center;
    font-size: 20px;
    color: #F0F0F2;
    letter-spacing: 0px;
    color: #F0F0F2;
    text-shadow: 0px 3px 6px #00000029;
    padding: 0 160px;
}

.plumes{
    display: flex;
    position: relative;
    top: 400px;
    margin-top: -150px;
}

.plume{
width: 130px;
height: 119px;
transform: matrix(0.96, 0.28, -0.28, 0.96, 0, 0);
opacity: 1;
display: flex;
position: relative;
}

.plume2{
width: 96px;
height: 100px;
transform: matrix(0.47, -0.88, 0.88, 0.47, 0, 0);
opacity: 1;
display: flex;
position: relative;
}

.plume3{
width: 157px;
height: 155px;
transform: matrix(-0.78, -0.63, 0.63, -0.78, 0, 0);
opacity: 1;
display: flex;
position: relative;
}

.plume4{
width: 181px;
height: 155px;
opacity: 1;
display: flex;
position: relative;
}
`;

export const ButtonToCarousel = styled.div ``;

