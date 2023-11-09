import React, { useEffect, useState } from "react";

import { Container, Formulario } from "./styles";
import Header from "../../Header copy";
import PedidosAbertos from "../PedidosAbertos/index";

const Pedidos: React.FC = () => {
  const containerStyles = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <>
      <Header />
      <Container>
        <div>
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
        </div>
      </ Container>
    </>
  );
};

export default Pedidos;
