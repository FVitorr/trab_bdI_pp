import React, { useEffect, useState } from "react";

import { Container, Formulario } from "./styles";
import Header from "../Header/index";
import PedidosAbertos from "../PedidosAbertos/index";

const Clientes: React.FC = () => {
  return (
    <Container>
      <Header />
        <Formulario>
          <p>Cliente</p>
          <input placeholder="Nome" type="text" />
          <input placeholder="Endereço" type="text" />
          <input placeholder="Telefone" type="text" />
          <input placeholder="Email" type="text" />
          <div>
          <button>Enviar</button>
          <button>Limpar</button>
          </div>
        </Formulario>
    </ Container>
  );
};

export default Clientes;
