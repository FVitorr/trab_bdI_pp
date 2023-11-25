import React, { useState } from "react";
import axios from 'axios';

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;
  id: number; // Adicionado o campo id
  nome: string;
  rua: string;
  bairro: string;
  numero_endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  email: string;
}

const EditarCliente: React.FC<Props> = ({
  isOpen,
  setModalOpen,
  id,
  nome,
  rua,
  bairro,
  numero_endereco,
  cidade,
  estado,
  telefone,
  email
}) => {

  const [nomeCliente, setNome] = useState(nome);
  const [ruaCliente, setRua] = useState(rua);
  const [bairroCliente, setBairro] = useState(bairro);
  const [numeroCliente, setNumeroEndereco] = useState(numero_endereco);
  const [cidadeCliente, setCidade] = useState(cidade);
  const [estadoCliente, setEstado] = useState(estado);
  const [telefoneCliente, setTelefone] = useState(telefone);
  const [emailCliente, setEmail] = useState(email);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nome") setNome(value);
    else if (name === "email") setEmail(value);
    else if (name === "telefone") setTelefone(value);
    else if (name === "rua") setRua(value);
    else if (name === "bairro") setBairro(value);
    else if (name === "numero_endereco") setNumeroEndereco(value);
    else if (name === "cidade") setCidade(value);
    else if (name === "estado") setEstado(value);
  };

  const handleSave = async () => {
    try {
      const url = `http://localhost:8080/clientes/${id}`;
      console.log(url)
      const response = await axios.put(url, {
        nome: nomeCliente,
        rua: ruaCliente,
        bairro: bairroCliente,
        numero_endereco: numeroCliente,
        cidade: cidadeCliente,
        estado: estadoCliente,
        telefone: telefoneCliente,
        email: emailCliente
      });

      setModalOpen();
    } catch (error) {
      console.error("Erro ao editar item:", error);
    }
  };


  if (isOpen) {
    return (
      <Container>
        <ModalStyle>
          <Formulario>
            <p>Editar cliente</p>
            <div>
              <p>Nome</p>
              <input
                placeholder="Informe o nome do cliente"
                type="text"
                name="nome"
                value={nomeCliente}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Rua</p>
              <input
                placeholder="Informe o endereco do cliente"
                type="text"
                name="rua"
                value={ruaCliente}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Bairro</p>
              <input
                placeholder="Informe o bairro do cliente"
                type="text"
                name="bairro"
                value={bairroCliente}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Numero</p>
              <input
                placeholder="Informe o número do cliente"
                type="text"
                name="numero_endereco"
                value={numeroCliente}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Cidade</p>
              <input
                placeholder="Informe a cidade do cliente"
                type="text"
                name="cidade"
                value={cidadeCliente}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Estado</p>
              <input
                placeholder="Informe o estado do cliente"
                type="text"
                name="estado"
                value={estadoCliente}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Telefone</p>
              <input
                placeholder="Informe o telefone do cliente"
                type="text"
                name="telefone"
                value={telefoneCliente}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Email</p>
              <input
                placeholder="Informe o email do cliente"
                type="text"
                name="email"
                value={emailCliente}
                onChange={handleInputChange}
              />
            </div>
          </Formulario>
          <Buttons>
            <button onClick={setModalOpen}>Cancelar</button>
            <button onClick={handleSave}>Salvar</button>
          </Buttons>
        </ModalStyle>
      </Container>
    );
  }
  return null;
};

export default EditarCliente;
