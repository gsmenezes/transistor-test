import React from "react";

import Carousel from "react-elastic-carousel";

import Grant from "../../assets/grant.png";
import Red from "../../assets/red.png";
import Sybil from "../../assets/sybil.png";

import { Container, Item, PersonCard } from "./styles";

import './carousel.css';

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, pagination: false },
  { width: 768, itemsToShow: 3, pagination: false },
];

const CarouselCards: React.FC = () => {
  return (
    <Container>
      <Carousel breakPoints={breakPoints}>
        <Item>
          <PersonCard>
            <img src={Grant} alt="Grant" />
            <p>
              A Camerata foi apenas os dois no início, e suas fileiras nunca
              foram destinadas a exceder um número a ser contado em uma mão.
            </p>
          </PersonCard>
        </Item>
        <Item>
          <PersonCard>
            <img src={Red} alt="Red" />
            <p>
              Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
              poderosa espada falante. O grupo Possessores quer tanto ela quanto
              o Transistor e está perseguindo implacavelmente a sua procura.
            </p>
          </PersonCard>
        </Item>
        <Item>
          <PersonCard>
            <img src={Sybil} alt="Sybil" />
            <p>
              Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos"
              da Camerata.
            </p>
          </PersonCard>
        </Item>
        <Item>
          <PersonCard>
            <img src={Grant} alt="Grant" />
            <p>
              A Camerata foi apenas os dois no início, e suas fileiras nunca
              foram destinadas a exceder um número a ser contado em uma mão.
            </p>
          </PersonCard>
        </Item>
        <Item>
          <PersonCard>
            <img src={Red} alt="Red" />
            <p>
              Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
              poderosa espada falante. O grupo Possessores quer tanto ela quanto
              o Transistor e está perseguindo implacavelmente a sua procura.
            </p>
          </PersonCard>
        </Item>
        <Item>
          <PersonCard>
            <img src={Sybil} alt="Sybil" />
            <p>
              Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos"
              da Camerata.
            </p>
          </PersonCard>
        </Item>
      </Carousel>
    </Container>
  );
};

export default CarouselCards;
