import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { parseISO } from 'date-fns';

import axios from "axios";

import { Container, Title, InputButton, FieldNames, Filtro } from "./styles";
import Header from "../../Header";
import Pedido from "../ItemPedido";
// import PedidosAbertos from "../PedidosAbertos/index";
import AdicionarPedido from "../CadastraPedido";
import { ICliente } from "../../Clientes/PaginaClientes";
import { IItem } from "../../Itens/PaginaItens";
import { Search_ } from "../../Itens/PaginaItens/styles";

interface IPedido {
  id: number;
  cliente: ICliente;
  data_pedido: string | null;
  estimativa_entrega: string;
  data_entrega: string;
  status_pedido: string;
  status_pagamento: string;
  itens: IItem[];
  observacao: string;

}

const Pedidos: React.FC = () => {
  const [pedido, setPedido] = useState<IPedido[]>([]);
  const [pagamento, setPagamento] = useState<string>("PENDENTE");
  const [statusPedido, setStatusPedido] = useState<string>("PENDENTE");
  const [dataInicial, setdataInicial] = useState<string>("");
  const [dataFinal, setdataFinal] = useState<string>("");

  const [openModal, setOpenModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    carregarPedidos();
  }, []);

  // const formatarDataEntrega = (data: string) => {
  //   const [year, month, day] = data.split("-");
  //   return `${day}-${month}-${year}`;
  // };

  const carregarPedidos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/pedidos");
      //console.log("ITENSS",response.data);
      setPedido(response.data);
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

  const handleSearch = () => {
      buscarPedidos();
  };

    const buscarPedidos = async () => {
    try {

      const parts1 = dataInicial.split('/');
      const dataInicialFormatada = `${parts1[2]}-${parts1[1]}-${parts1[0]}`;
      console.log("Data de entrega:", dataInicialFormatada);

      const dataInicialObj = parseISO(dataInicialFormatada);
      console.log("Data de entrega:", dataInicialObj);

      const parts2 = dataFinal.split('/');
      const dataFinalFormatada = `${parts2[2]}-${parts2[1]}-${parts2[0]}`;
      console.log("Data de entrega:", dataFinalFormatada);

      const dataFinalObj = parseISO(dataFinalFormatada);
      console.log("Data de entrega:", dataFinalObj);

      const response = await axios.get("http://localhost:8080/pedidos/filtrar", {
        params: {
          nomeCliente: searchTerm,
          statusPedido: statusPedido,
          statusPagamento: pagamento,
          dataInicial: dataInicialObj,
          dataFinal: dataFinalObj,
        }
      });
      setPedido(response.data);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
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
          <div>
            <input
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>
              <Search_ />
            </button>
          </div>
          <button onClick={() => setOpenModal(true)}><b>Adicionar pedido</b></button>
        </InputButton>
        <Filtro>
          <p>Filtrar por:</p>
          <div>
            <section>
              <p>Status do Pedido</p>
              <select
                value={statusPedido}
                onChange={(e) => setStatusPedido(e.target.value)}
              >
                <option value="PENDENTE">PENDENTE</option>
                <option value="PRONTO">PRONTO</option>
                <option value="FINALIZADO">FINALIZADO</option>
                <option value="CANCELADO">CANCELADO</option>
              </select>
            </section>
            <section>
              <p>Status do Pagamento</p>
              <select
                value={pagamento}
                onChange={(e) => setPagamento(e.target.value)}
              >
                <option value="PENDENTE">PENDENTE</option>
                <option value="PAGO">PAGO</option>
                <option value="CANCELADO">CANCELADO</option>
              </select>
            </section>
            <section>
              <p>Data inicial</p>
              <InputMask
                mask="99/99/9999"
                placeholder="Informe a data inicial"
                type="text"
                name="dataInicial"
                value={dataInicial}
                onChange={(e) => setdataInicial(e.target.value)}
              />
            </section>
            <section>
              <p>Data final</p>
              <InputMask
                mask="99/99/9999"
                placeholder="Informe a data final"
                type="text"
                name="dataFinal"
                value={dataFinal}
                onChange={(e) => setdataFinal(e.target.value)}
              />
            </section>
          </div>
        </Filtro>
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
            key={pedido_.id}
            id={pedido_.id}
            nomeCliente={pedido_.cliente.nome}
            itens={pedido_.itens}
            valorTotal={pedido_.itens.reduce((total, item) => total + item.valor, 0)}
            statusPedido={pedido_.status_pedido}
            dataEntrega={pedido_.estimativa_entrega}
            statusPagamento={pedido_.status_pagamento}
            observacao={pedido_.observacao}
          //observacao= {observacao}
          />
        ))}
        <AdicionarPedido isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
          name={"NAME"} valor={14} status={"status"} itens={['ok', 'ok2']} />

      </Container>
    </>
  );
};

export default Pedidos;
