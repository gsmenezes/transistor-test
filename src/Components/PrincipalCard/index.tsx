import React from "react";

import Background from "../../assets/background-card2.png";
import RedCard from "../../assets/image-card.png";
import Plume from "../../assets/plume.png";
import Plume2 from "../../assets/plume2.png";
import Plume3 from "../../assets/plume3.png";
import Plume4 from "../../assets/plume4.png";

import { Container, Card, ButtonToCarousel } from "./styles";

const PrincipalCard: React.FC = () => {
  return (
    <Container>
      <img src={Background} alt="Background do Card principal" />
      <Card>
        <p className="title-card">Transistor - Red the Singer</p>
        <div className="plumes">
          <img src={Plume} alt="Pluma" className="plume" />
          <img src={Plume2} alt="Pluma" className="plume2" />
          <img src={Plume3} alt="Pluma" className="plume3" />
          <img src={Plume4} alt="Pluma" className="plume4" />
        </div>
        <img src={RedCard} alt="Card de Red" />
        <p className="phrase">
          "Olha, o que quer que você esteja pensando, me faça um favor, não
          solte."
        </p>
      </Card>
      <ButtonToCarousel>
        <button></button>
      </ButtonToCarousel>
    </Container>
  );
};

export default PrincipalCard;
