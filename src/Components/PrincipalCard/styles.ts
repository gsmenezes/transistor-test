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

@media(max-width: 768px){
    
img{
    height: 675px;
}
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
height: 132px;
transform: matrix(0.96,0.28,-0.28,0.96,-40,20) rotate(-23deg);
opacity: 1;
display: flex;
position: relative;
}

.plume2{
width: 119px;
height: 100px;
transform: rotate(55deg) matrix(0.55,-0.88,0.88,0.47,38,217);
opacity: 1;
display: flex;
position: relative;
}

.plume3{
width: 234px;
height: 155px;
transform: matrix(-0.78,-0.63,0.63,-0.78,145,-44) rotate(100deg);
opacity: 1;
display: flex;
position: relative;
}

.plume4{
width: 145px;
height: 155px;
opacity: 1;
display: flex;
position: relative;
transform: rotate(60deg) matrix(0.59,0,0,1,113,45);
}

@media(max-width: 768px){
    top: 14%;
    left: 15%;
    width: 70%;
    height: 681px;

    img{
        height: 70%;
    }

    p.title-card{
        font-size: 13px;
        padding: 0 25px 8px;
    }

    p.phrase{
        font-size: 16px;
        padding: 0px 65px;
    }

    .plume{
    width: 65px;
    height: 90px;
    transform: matrix(1.96,0.28,-0.28,0.96,-25,-69) rotate(-8deg);
    margin: 0px 4px;
    }

    .plume2{
    width: 96px;
    height: 90px;
    transform: rotate(51deg) matrix(0.55,-0.88,0.88,0.47,-52,93);
    }

    .plume3{
    margin: -113px 7px;
    transform: matrix(-0.78,-0.63,0.63,-0.78,-10,-13) rotate(100deg);
    }

    .plume4{
    transform: rotate(60deg) matrix(0.59,0,0,1,-31,-23);
    object-fit: contain;
    object-position: bottom;
    margin: 0px -86px;
    width: 109px;
    }

}
`;

export const ButtonToCarousel = styled.div `
display: inline-flex;
margin: 0 50%;

button{
    border-radius: 40%;
    width: 25px;
    text-align: center;
    vertical-align: middle;
    padding: 3px 0px 0px;
    background-color: #FFFFFF;
}

@media(max-width: 768px){
display: inline-flex;
margin: 0 47%;

button{
    border-radius: 30%;
    width: 22px;
}
}
`;

