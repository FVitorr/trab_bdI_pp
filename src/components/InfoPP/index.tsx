import React, { useEffect, useState } from "react";
import mulher_edge from './../../assets/mulher_edge.svg';

import { Container, TextOverlay } from "./styles";

const InfoPP: React.FC = () => {
  return (
    <Container>
      <TextOverlay>
      <h1>Ponto Perfeito</h1>
      <p>Transformamos tecidos em obras-primas e sonhos em realidade. Seja para um evento especial ou para o dia a dia, confie-nos seu desejo de estilo e deixe-nos costurar a perfeição para você.</p>
      </TextOverlay>
      <img src={mulher_edge}/>
    </ Container>
  );
};

export default InfoPP;
