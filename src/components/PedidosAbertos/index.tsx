import React, { useEffect, useState } from "react";
import Pedido from "../Pedido";

import { Container } from "./styles";

const PedidosAbertos: React.FC = () => {
  const itens = ['Bainha', "Bolso"]

  return (
    <Container>
    <Pedido name={"Breno Alves"}  valor={150.00} itens={itens}/>
    <Pedido name={"Augusto Leal"}  valor={150.00} itens={itens}/>
    <Pedido name={"Vitor Augusto"}  valor={150.00} itens={itens}/>
    <Pedido name={"Fulano Um"}  valor={150.00} itens={itens}/>
    <Pedido name={"Clicano Dois"}  valor={150.00} itens={itens}/>
    <Pedido name={"Deltrano Três"}  valor={150.00} itens={itens}/>
    <Pedido name={"Beltrano De Tal"}  valor={150.00} itens={itens}/>
    <Pedido name={"Joaozinho"}  valor={150.00} itens={itens}/>
    </Container>
  );
};

export default PedidosAbertos;
