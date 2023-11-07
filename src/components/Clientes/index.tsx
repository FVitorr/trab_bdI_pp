import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Formulario, ListClientes } from "./styles";
import Cliente from "../Cliente";
import Header from "../Header copy";

export interface ICliente {
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
}

const Clientes: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    email: ""
  });
  
  const [clientes, setClientes] = useState<ICliente[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const adicionarCliente = () => {
    const novoCliente: ICliente = {
      nome: inputValues.nome,
      endereco: inputValues.endereco,
      telefone: inputValues.telefone,
      email: inputValues.email
    };

    
  
    setClientes(prevState => [...prevState, novoCliente]);
    // Limpar os valores dos inputs após adicionar o cliente
    setInputValues({
      nome: "",
      endereco: "",
      telefone: "",
      email: ""
    });
  };
  
  const adicionarNovoCliente = async () => {
    try {
      const novoCliente: ICliente = {
        nome: inputValues.nome,
        endereco: inputValues.endereco,
        telefone: inputValues.telefone,
        email: inputValues.email
      };
      console.log(novoCliente)
      // Faz a chamada POST para a sua rota do servidor com o novo cliente
      await axios.post("http://localhost:8080/clientes", novoCliente);
  
      // Após o POST bem-sucedido, adiciona o cliente ao estado clientes
      setClientes(prevState => [...prevState, novoCliente]);
  
      // Limpa os valores dos inputs após adicionar o cliente
      setInputValues({
        nome: "",
        endereco: "",
        telefone: "",
        email: ""
      });
    } catch (error) {
      console.error("Erro ao adicionar novo cliente:", error);
    }
  };

  const getClientes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/clientes");
      const clientesResponse: ICliente[] = response.data; // Recebe a lista de clientes do servidor
      console.log("clientesResponse", clientesResponse);
      setClientes(clientesResponse); // Atualiza o estado clientes com a lista recebida do servidor
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div>
          <Formulario>
            <p>Clientes</p>
            <input
              placeholder="Nome"
              type="text"
              name="nome"
              value={inputValues.nome}
              onChange={handleInputChange}
            />
            <input
              placeholder="Endereço"
              type="text"
              name="endereco"
              value={inputValues.endereco}
              onChange={handleInputChange}
            />
            <input
              placeholder="Telefone"
              type="text"
              name="telefone"
              value={inputValues.telefone}
              onChange={handleInputChange}
            />
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
            />
            <div>
              <button onClick={adicionarNovoCliente}>Enviar</button>
              <button>Limpar</button>
            </div>
          </Formulario>

          <ListClientes>
            {clientes.map((cliente) => (
              <Cliente
                name={cliente.nome}
                email={cliente.email}
                endereco={cliente.endereco}
                telefone={cliente.telefone}
              />
            ))}
          </ListClientes>
        </div>
      </Container>
    </>
  );
};

export default Clientes;
