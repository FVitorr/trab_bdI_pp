import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;
}

const AdicionarCliente: React.FC<Props> = ({ isOpen, setModalOpen }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero_endereco, setNumeroEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");


  const handleInputChange = (e:any) => {
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

  const handleSalvarClick = async () => {
    try {
      const response = await axios.post("http://localhost:8080/clientes", {
        nome,
        email,
        telefone,
        rua,
        bairro,
        numero_endereco,
        cidade,
        estado
      });

      console.log("Pedido criado com sucesso:", response.data);

      setModalOpen();
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
    }
  };


  if (isOpen) {
    return (
      <Container>
        <ModalStyle>
          <Formulario>
            <p>Cadastro de cliente</p>
            <div>
              <p>Nome</p>
              <input
                placeholder="Informe o nome do cliente"
                type="text"
                name="nome"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Telefone</p>
              <input
                placeholder="Informe o telefone do cliente"
                type="text"
                name="telefone"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Email</p>
              <input
                placeholder="Informe o email do cliente"
                type="text"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Rua</p>
              <input
                placeholder="Informe a rua do cliente"
                type="text"
                name="rua"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Bairro</p>
              <input
                placeholder="Informe o bairro do cliente"
                type="text"
                name="bairro"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Numero</p>
              <input
                placeholder="Informe o numero do cliente"
                type="text"
                name="numero_endereco"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Cidade</p>
              <input
                placeholder="Informe a cidade do cliente"
                type="text"
                name="cidade"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Estado</p>
              <input
                placeholder="Informe o estado do cliente"
                type="text"
                name="estado"
                onChange={handleInputChange}
              />
            </div>
          </Formulario>
          <Buttons>
            <button onClick={setModalOpen}>Cancelar</button>
            <button  onClick={handleSalvarClick}>Salvar</button>
          </Buttons>
        </ModalStyle>
      </Container>
    );
  }
  return null;
};

export default AdicionarCliente;
