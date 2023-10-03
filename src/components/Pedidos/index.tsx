import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const Pedidos: React.FC = () => {
  return (
    <Container>

  <p>Pedidos</p>
  <input placeholder="Cliente" type="text" />
  <input placeholder="Itens" type="text" />
  <input placeholder="Data de entrega" type="text" />
  <input placeholder="Observações" type="text" />
      
    </ Container>
  );
};

export default Pedidos;
