import React, { useEffect, useState } from "react";
import maquina from './../../assets/maquina.png';
import PedidosAbertos from "../PedidosAbertos";
import Header from "../Header";
import Footer from "../Footer";
import InfoPP from "../InfoPP";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>

      <Header />
      <InfoPP />
      <PedidosAbertos />
      <Footer />
      
    </ Container>
  );
};

export default Main;
