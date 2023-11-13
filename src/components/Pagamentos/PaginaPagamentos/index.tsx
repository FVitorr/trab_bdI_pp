import React, { useState, useRef, useEffect } from "react";

import { Container, Title, InputButton, FieldNames } from "./styles";
import Header from "../../Header";
import Pagamento from "../ItemPagamento";
// import PedidosAbertos from "../PedidosAbertos/index";


const Pedidos: React.FC = () => {
  
  const [expanded, setExpanded] = useState(false);

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Pagamentos</p>
          <p>Estes são seus pagamentos cadastrados.</p>
        </Title>
        <InputButton>
          <input placeholder="Pesquisar" />
        </InputButton>
        <FieldNames>
          <p>Código</p>
          <p>Código pedido</p>
          <p>Valor</p>
          <p>Status</p>
          <p>Ações</p>
        </FieldNames>
        
        <Pagamento id = {"1"} idPedido = {"1"} price = {"1"} status = {"1"}/>

      </Container>
    </>
  );
};

export default Pedidos;
