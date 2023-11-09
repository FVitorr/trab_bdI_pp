import React, { useEffect, useState } from "react";
import PedidosAbertos from "../Pedidos/PedidosAbertos";
import Header from "../Header";
import Footer from "../Footer";
import InfoPP from "../BannerHomePage";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
          <InfoPP />
          {/* <PedidosAbertos />
          <Footer /> */}
      </ Container>
    </>

  );
};

export default Main;
