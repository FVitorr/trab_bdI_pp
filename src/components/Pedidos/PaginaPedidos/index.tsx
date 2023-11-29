import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Title, InputButton, FieldNames } from "./styles";
import Header from "../../Header";
import Pedido from "../ItemPedido";
// import PedidosAbertos from "../PedidosAbertos/index";
import AdicionarPedido from "../CadastraPedido";

interface IPedido {
  value: string;
  id: string;
  price: string;
}

const Pedidos: React.FC = () => {
  const itens = ['Bainha', "Bolso"]
  const itens1 = ['Bainha', "Bolso", 'Bainha', "Bolso", 'Bainha', "Bolso", 'Bainha', "Bolso"]
  const [pedido, setPedido] = useState<IPedido[]>([]);
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    // Carregar itens do backend ao montar o componente
    carregarItens();
  }, []);

  const carregarItens = async () => {
    try {
      const response = await axios.get("http://localhost:8080/pedidos");
      console.log(response.data);
      setPedido(response.data);
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

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
