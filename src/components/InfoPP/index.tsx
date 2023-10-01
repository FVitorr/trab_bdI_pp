import React, { useEffect, useState } from "react";
import maquina from './../../assets/maquina.png';

import { Container } from "./styles";

const InfoPP: React.FC = () => {
  return (
    <Container>
      <div>
      <h1>Ponto Perfeito</h1>
      <p>Transformamos tecidos em obras-primas e sonhos em realidade. Seja para um evento especial ou para o dia a dia, confie-nos seu desejo de estilo e deixe-nos costurar a perfeição para você.</p>
      </div>
      <img src={maquina}/>
    </ Container>
  );
};

export default InfoPP;
