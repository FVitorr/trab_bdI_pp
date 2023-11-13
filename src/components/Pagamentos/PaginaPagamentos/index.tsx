import React, { useState, useRef, useEffect } from "react";

import { Container, Title, InputButton, FieldNames } from "./styles";
import Header from "../../Header";
import Pedido from "../../Pedidos/ItemPedido/index";
// import PedidosAbertos from "../PedidosAbertos/index";
import AdicionarPedido from "../../Pedidos/CadastraPedido/index";

interface Option {
  value: string;
  id: string;
  price: string;
}

const Pedidos: React.FC = () => {
  const [expanded, setExpanded] = useState(false);


  const itens = ['Bainha', "Bolso"]
  const itens1 = ['Bainha', "Bolso", 'Bainha', "Bolso", 'Bainha', "Bolso", 'Bainha', "Bolso"]
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Pedidos</p>
          <p>Estes são seus pedidos cadastrados.</p>
        </Title>
        <InputButton>
          <input placeholder="Pesquisar" />
          <button onClick={() => setOpenModal(true)}><b>Adicionar pedido</b></button>
        </InputButton>
        <FieldNames>
          <p>Código</p>
          <p>Nome</p>
          <p>Itens</p>
          <p>Valor</p>
          <p>Status</p>
          <p>Ações</p>
        </FieldNames>
        <Pedido name={"Breno Alves"} valor={150.00} itens={itens} status={"Pronto"} />
        <Pedido name={"Augusto Leal"} valor={150.00} itens={itens} status={"Finalizado"} />
        <Pedido name={"Vitor Augusto"} valor={150.00} itens={itens} status={"Pendente"} />
        <Pedido name={"Fulano Um"} valor={150.00} itens={itens1} status={"Pendente"} />
        <Pedido name={"Clicano Dois"} valor={150.00} itens={itens} status={"Pronto"} />
        <Pedido name={"Deltrano Três"} valor={150.00} itens={itens} status={"Finalizado"} />
        <Pedido name={"Beltrano De Tal"} valor={150.00} itens={itens} status={"Pronto"} />
        <Pedido name={"Joaozinho"} valor={150.00} itens={itens} status={"Finalizado"} />
        <Pedido name={"Deltrano Três"} valor={150.00} itens={itens} status={"Finalizado"} />
        <Pedido name={"Beltrano De Tal"} valor={150.00} itens={itens} status={"Pronto"} />
        <Pedido name={"Joaozinho"} valor={150.00} itens={itens} status={"Finalizado"} />
        <AdicionarPedido isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
          name={"NAME"} valor={14} status={"status"} itens={['ok', 'ok2']}>
          Conteúdo do modal
        </AdicionarPedido>
      </Container>
    </>
  );
};

export default Pedidos;
