import React from "react";
import top_rigth from './../../assets/top-rigth.png';
import bottom_left from './../../assets/bottom-left.png';

import { Container, FirstSection, SecondSection } from "./styles";

const InfoPP: React.FC = () => {
  return (
    <Container>
      <FirstSection>
        <p>
          Transformamos <b>tecidos</b> em <b>obra-prima</b> e <b>sonhos</b> em <b>realidade</b>.
        </p>
        <img src={top_rigth} />
      </FirstSection>
      <SecondSection>
        <img src={bottom_left} />
        <p>
          Seja para um <b>evento especial</b> ou<br />
          <b> dia a dia</b>, confie-nos<br />
          seu desejo de estilo e <b>deixe-nos<br />
            costurar a perfeição para você</b>.
        </p>
      </SecondSection>
    </ Container >
  );
};

export default InfoPP;
