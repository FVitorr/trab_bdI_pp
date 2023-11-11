import React, { useEffect, useState } from "react";
import Pedido from "../ItemPedido";

import { Container } from "./styles";

const PedidosAbertos: React.FC = () => {
  const itens = ['Bainha', "Bolso"]
  const itens1 = ['Bainha', "Bolso", 'Bainha', "Bolso", 'Bainha', "Bolso", 'Bainha', "Bolso"]


  return (
    <Container>
      <Pedido name={"Breno Alves"} valor={150.00} itens={itens} status={"Pronto"} />
      <Pedido name={"Augusto Leal"} valor={150.00} itens={itens} status={"Finalizado"} />
      <Pedido name={"Vitor Augusto"} valor={150.00} itens={itens} status={"Pendente"} />
      <Pedido name={"Fulano Um"} valor={150.00} itens={itens1} status={"Pendente"} />
      <Pedido name={"Clicano Dois"} valor={150.00} itens={itens} status={"Pronto"} />
      <Pedido name={"Deltrano Três"} valor={150.00} itens={itens} status={"Finalizado"} />
      <Pedido name={"Beltrano De Tal"} valor={150.00} itens={itens} status={"Pronto"} />
      <Pedido name={"Joaozinho"} valor={150.00} itens={itens} status={"Finalizado"} />
    </Container>
  );
};

export default PedidosAbertos;
