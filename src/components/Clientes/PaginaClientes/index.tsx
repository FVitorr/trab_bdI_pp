import React, { useState } from "react";
import axios from "axios";

import { Container, FieldNames, InputButton, Title } from "./styles";
import Cliente from "../ItemCliente";
import Header from "../../Header copy";

import AdicionarCliente from "../CadastraCliente";

export interface ICliente {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
}

const Clientes: React.FC = () => {
  // const [inputValues, setInputValues] = useState({
  //   nome: "",
  //   endereco: "",
  //   telefone: "",
  //   email: ""
  // });

  // const [clientes, setClientes] = useState<ICliente[]>([]);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setInputValues(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const adicionarCliente = () => {
  //   const novoCliente: ICliente = {
  //     nome: inputValues.nome,
  //     endereco: inputValues.endereco,
  //     telefone: inputValues.telefone,
  //     email: inputValues.email
  //   };



  //   setClientes(prevState => [...prevState, novoCliente]);
  //   // Limpar os valores dos inputs após adicionar o cliente
  //   setInputValues({
  //     nome: "",
  //     endereco: "",
  //     telefone: "",
  //     email: ""
  //   });
  // };

  // const adicionarNovoCliente = async () => {
  //   try {
  //     const novoCliente: ICliente = {
  //       nome: inputValues.nome,
  //       endereco: inputValues.endereco,
  //       telefone: inputValues.telefone,
  //       email: inputValues.email
  //     };
  //     console.log(novoCliente)
  //     // Faz a chamada POST para a sua rota do servidor com o novo cliente
  //     await axios.post("http://localhost:8080/clientes", novoCliente);

  //     // Após o POST bem-sucedido, adiciona o cliente ao estado clientes
  //     setClientes(prevState => [...prevState, novoCliente]);

  //     // Limpa os valores dos inputs após adicionar o cliente
  //     setInputValues({
  //       nome: "",
  //       endereco: "",
  //       telefone: "",
  //       email: ""
  //     });
  //   } catch (error) {
  //     console.error("Erro ao adicionar novo cliente:", error);
  //   }
  // };

  // const getClientes = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/clientes");
  //     const clientesResponse: ICliente[] = response.data; // Recebe a lista de clientes do servidor
  //     console.log("clientesResponse", clientesResponse);
  //     setClientes(clientesResponse); // Atualiza o estado clientes com a lista recebida do servidor
  //   } catch (error) {
  //     console.error("Erro ao buscar clientes:", error);
  //   }
  // };

  // useEffect(() => {
  //   getClientes();
  // }, []);
  const [openModal, setOpenModal] = useState(false)

  const clientes = [
    {
      id: "1", nome: "Fulano Silva", endereco: "Rua ABC,123", telefone: "(11) 98765-4321", email: "fulano@email.com",
    }, {
      id: "2", nome: "Ciclano Santos", endereco: "Avenida XYZ,456", telefone: "(11) 12345-6789", email: "ciclano@email.com",
    }, {
      id: "3", nome: "Beltrano Oliveira", endereco: "Rua 123,789", telefone: "(11) 23456-7890", email: "beltrano@email.com",
    }, {
      id: "4", nome: "João da Silva", endereco: "Avenida ABC,456", telefone: "(11) 34567-8901", email: "joao@email.com",
    }, {
      id: "5", nome: "Maria Oliveira", endereco: "Rua XYZ,789", telefone: "(11) 45678-9012", email: "maria@email.com",
    }, {
      id: "6", nome: "José Santos", endereco: "Avenida 123,987", telefone: "(11) 56789-0123", email: "jose@email.com",
    }, {
      id: "7", nome: "Ana Oliveira", endereco: "Rua ABC,987", telefone: "(11) 67890-1234", email: "ana@email.com",
    }, {
      id: "8", nome: "Lucas Silva", endereco: "Avenida XYZ,789", telefone: "(11) 78901-2345", email: "lucas@email.com",
    }, {
      id: "9", nome: "Isabela Santos", endereco: "Rua 123,654", telefone: "(11) 89012-3456", email: "isabela@email.com",
    }, {
      id: "10", nome: "Ricardo Oliveira", endereco: "Avenida ABC,321", telefone: "(11) 90123-4567", email: "ricardo@email.com",
    },];

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
            id={'Código'}
            key={index}
            name={cliente.nome}
            endereco={cliente.endereco}
            telefone={cliente.telefone}
            email={cliente.email}
          />
        ))}
        <AdicionarCliente isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          Conteúdo do modal
        </AdicionarCliente>
      </Container >
    </>
  );
};

export default Clientes;
