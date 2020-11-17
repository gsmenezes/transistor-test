import React from "react";

import {VscChevronRight, VscChevronLeft} from 'react-icons/vsc';

import Grant from "../../assets/grant.png";
import Red from "../../assets/red.png";
import Sybil from "../../assets/sybil.png";

import {
  Container,
  Cards,
  Card1,
  GrantCard,
  Card2,
  RedCard,
  Card3,
  SybilCard,
} from "./styles";

const CarouselCards: React.FC = () => {
  return (
    <Container>
      <VscChevronLeft size={60} />
      <Cards>
        <Card1>
          <GrantCard>
            <img src={Grant} alt="Grant" />
            <p>
              A Camerata foi apenas os dois no início, e suas fileiras nunca
              foram destinadas a exceder um número a ser contado em uma mão.
            </p>
          </GrantCard>
        </Card1>
        <Card2>
          <RedCard>
            <img src={Red} alt="Red" />
            <p>
              Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
              poderosa espada falante. O grupo Possessores quer tanto ela quanto
              o Transistor e está perseguindo implacavelmente a sua procura.
            </p>
          </RedCard>
        </Card2>
        <Card3>
          <SybilCard>
            <img src={Sybil} alt="Sybil" />
            <p>
            Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.
            </p>
          </SybilCard>
        </Card3>
      </Cards>
      <VscChevronRight size={60} />
    </Container>
  );
};

export default CarouselCards;
