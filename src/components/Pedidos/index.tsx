import React, { useEffect, useState } from "react";

import { Container, Formulario } from "./styles";
import Header from "../Header/index";
import PedidosAbertos from "../PedidosAbertos/index";

const Pedidos: React.FC = () => {
  return (
    <Container>
      <Header />

<Formulario>
  <p>Pedidos</p>
  <input placeholder="Cliente" type="text" />
  <input placeholder="Itens" type="text" />
  <input placeholder="Data de entrega" type="text" />
  <input placeholder="Observações" type="text" />
  <div>
  <button>Enviar</button>
  <button>Limpar</button>
  </div>
  </Formulario>
<PedidosAbertos />
    </ Container>
  );
};

export default Pedidos;
