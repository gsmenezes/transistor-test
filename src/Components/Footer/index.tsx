import React, { useCallback } from "react";
import {VscChevronUp } from "react-icons/vsc";

import { Container, Button } from "./styles";

const Footer: React.FC = () => {
  const handleToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Button>
        <button onClick={handleToTop}>
          <VscChevronUp size={30} />
        </button>
      </Button>
    </Container>
  );
};

export default Footer;
