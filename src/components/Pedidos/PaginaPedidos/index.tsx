import React, { useState, useRef, useEffect } from "react";

import { Container, Title, InputButton, FieldNames, SelectArea, SelectBtn, Down, Checkboxes, OverSelect } from "./styles";
import Header from "../../Header copy";
import PedidosAbertos from "../PedidosAbertos/index";
import EditarPedido from "../CadastraPedido";

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

  const labelCSS = {
    border: "1px solid black",
    marginTop: "0.5rem",
    color: "black",
    display: "grid",
    gridTemplateColumns: "0.5fr 0.5fr 1.5fr 2fr",
    justifyItems: "start", // Alinha os itens à esquerda
    paddingLeft: "1rem"
  }

  const [openModal, setOpenModal] = useState(false)

  return (
    <Container>
      <Header />
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
      <PedidosAbertos />
      <EditarPedido isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
        name={"NAME"} valor={14} status={"status"} itens={['ok', 'ok2']}>
        Conteúdo do modal
      </EditarPedido>
    </Container>
  );
};

export default Pedidos;
