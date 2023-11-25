import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, FieldNames, InputButton, Title } from "./styles";
import Cliente from "../ItemCliente";
import Header from "../../Header";

import AdicionarCliente from "../CadastraCliente";

export interface ICliente {
  id: number;
  nome: string;
  rua: string;
  bairro :string;
  numero_endereco :string;
  cidade :string;
  estado:string;
  telefone: string;
  email: string;
}

const Clientes: React.FC = () => {

  const [openModal, setOpenModal] = useState(false)
  const [clientes, setClientes] = useState<ICliente[]>([]);

  useEffect(() => {
    // Carregar itens do backend ao montar o componente
    carregarClientes();
  }, []);

  const carregarClientes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

  const adicionarCliente = async (novoCliente: ICliente) => {
    try {
      await axios.post("http://localhost:8080/clientes", novoCliente);
      // Recarregar a lista de itens após adicionar um novo Cliente
      carregarClientes();
    } catch (error) {
      console.error("Erro ao adicionar Cliente:", error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Clientes</p>
          <p>Estes são seus clientes cadastrados.</p>
        </Title>
        <InputButton>
          <input placeholder="Pesquisar" />
          <button onClick={() => setOpenModal(true)}><b>Adicionar cliente</b></button>
        </InputButton>
        <FieldNames>
          <p>Código</p>
          <p>Nome</p>
          <p>Endereço</p>
          <p>Telefone</p>
          <p>Email</p>
          <p>Ações</p>
        </FieldNames>
        {clientes.map((cliente, index) => (
          <Cliente
            id={cliente.id}
            key={index}
            nome={cliente.nome}
            rua={cliente.rua}
            bairro={cliente.bairro}
            cidade={cliente.cidade}
            numero_endereco={cliente.numero_endereco}
            estado={cliente.estado}
            telefone={cliente.telefone}
            email={cliente.email}
          />
        ))}
        <AdicionarCliente
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
          adicionarCliente={adicionarCliente}
          >
          Conteúdo do modal
        </AdicionarCliente>
      </Container >
    </>
  );
};

export default Clientes;
