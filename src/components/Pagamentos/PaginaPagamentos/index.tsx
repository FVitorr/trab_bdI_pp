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
  const Options: Option[] = [
    { value: "opcao1", id: "1", price: "12.2" },
    { value: "opcao2", id: "2", price: "12.2" },
    { value: "opcao3", id: "3", price: "12.2" },
    { value: "opcao4", id: "4", price: "12.2" },
    { value: "opcao1", id: "5", price: "12.2" },
    { value: "opcao2", id: "6", price: "12.2" },
    { value: "opcao3", id: "7", price: "12.2" },
    { value: "opcao4", id: "8", price: "12.2" },
    { value: "opcao1", id: "9", price: "12.2" },
    { value: "opcao2", id: "10", price: "12.2" },
    { value: "opcao3", id: "11", price: "12.2" },
    { value: "opcao4", id: "12", price: "12.2" },
  ];

  const [expanded, setExpanded] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };


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
