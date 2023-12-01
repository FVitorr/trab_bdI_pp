import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Title, InputButton, FieldNames } from "./styles";
import Header from "../../Header";
import Pedido from "../ItemPedido";
// import PedidosAbertos from "../PedidosAbertos/index";
import AdicionarPedido from "../CadastraPedido";
import { ICliente } from "../../Clientes/PaginaClientes";
import { IItem } from "../../Itens/PaginaItens";

interface IPedido {
  id: number;
  cliente: ICliente;
  data_pedido: string | null;
  estimativa_entrega: string;
  data_entrega: string;
  status_pedido: string;
  status_pagamento: string;
  itens: IItem[];
}

const Pedidos: React.FC = () => {
  const [pedido, setPedido] = useState<IPedido[]>([]);
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    carregarItens();
  }, []);

  // const formatarDataEntrega = (data: string) => {
  //   const [year, month, day] = data.split("-");
  //   return `${day}-${month}-${year}`;
  // };
  
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
          <p>Pagamento</p>
          <p>Data entrega</p>
          <p>Ações</p>
        </FieldNames>
        {pedido.map((pedido_) => (
          <Pedido
          id = {pedido_.id}
          nomeCliente={pedido_.cliente.nome}
          itens={pedido_.itens}
          valorTotal={pedido_.itens.reduce((total, item) => total + item.valor, 0)}
          statusPedido={pedido_.status_pedido}
          dataEntrega={pedido_.estimativa_entrega}
          statusPagamento={pedido_.status_pagamento}
        />
        ))}
        <AdicionarPedido isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
          name={"NAME"} valor={14} status={"status"} itens={['ok', 'ok2']}>
          Conteúdo do modal
        </AdicionarPedido>
      </Container>
    </>
  );
};

export default Pedidos;
