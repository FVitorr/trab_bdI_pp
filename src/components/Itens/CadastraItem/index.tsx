import React, { useState } from "react";
import axios from "axios";

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;
}

const AdicionarItem: React.FC<Props> = ({ isOpen, setModalOpen }) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    if (name === "name") setNome(value);
    else if (name === "valor") setValor(value);
    else if (name === "descricao") setDescricao(value);
  };

  const handleSalvarClick = async () => {
    try {
      const response = await axios.post("http://localhost:8080/itens", {
        nome,
        valor: parseFloat(valor),
        descricao,
      });
      setModalOpen();
    } catch (error) {
      console.error("Erro ao criar item:", error);
    }
  };

  if (isOpen) {
    return (
      <Container>
        <ModalStyle>
          <Formulario>
            <p>Cadastro de Item</p>
            <div>
              <p>Nome</p>
              <input
                placeholder="Informe o nome do item"
                type="text"
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Valor</p>
              <input
                placeholder="Informe o valor do item"
                type="text"
                name="valor"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Descrição</p>
              <input
                placeholder="Infore a descrição do item"
                type="text"
                name="descricao"
                onChange={handleInputChange}
              />
            </div>
          </Formulario>
          <Buttons>
            <button onClick={setModalOpen}>Cancelar</button>
            <button onClick={handleSalvarClick}>Salvar</button>
          </Buttons>
        </ModalStyle>
      </Container>
    );
  }

  return null;
};

export default AdicionarItem;
