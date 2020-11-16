import React from "react";

import Logo from '../../assets/logo.png';

import { Container } from "./styles";

const Header: React.FC = () => (
    <>
      <Container>
        <img src={Logo} alt="Logo" />
        <h1>SUPERGIANTGAMES</h1>
      </Container>
    </>
  );

export default Header;
