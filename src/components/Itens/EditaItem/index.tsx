import React, { useState } from "react";
import axios from 'axios';

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;
  id: number
  name: string;
  valor: number;
  descricao: string;
}

const EditarItem: React.FC<Props> = ({
  isOpen,
  setModalOpen,
  id,
  name,
  valor,
  descricao
}) => {
  const [nome, setNome] = useState(name);
  const [valor_, setValor] = useState(String(valor));
  const [descricao_, setDescricao] = useState(descricao);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") setNome(value);
    else if (name === "valor") setValor(value);
    else if (name === "descricao") setDescricao(value);
  };

  const handleSave = async () => {
    try {
      const url = `http://localhost:8080/itens/${id}`;
      console.log(url)
      const response = await axios.put(url, {
        nome,
        valor: parseFloat(valor_),
        descricao: descricao_
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
            <p>Editar item</p>
            <div>
              <p>Nome</p>
              <input
                placeholder="Informe o nome do item"
                type="text"
                name="name"
                value={nome}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Valor</p>
              <input
                placeholder="Informe o valor do item"
                type="text"
                name="valor"
                value={valor_}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Descrição</p>
              <input
                placeholder="Informe a descrição do item"
                type="text"
                name="descricao"
                value={descricao_}
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

export default EditarItem;
