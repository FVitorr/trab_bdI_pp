import React, { useEffect, useState } from "react";

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;

  nome: string;
  valor: number;
  descricao: string;
}

const AdicionarItem: React.FC<Props> = ({
  isOpen,
  setModalOpen,
  nome,
  valor,
  descricao
}) => {
  if (isOpen) {
    const [value_, setValor] = useState("");
    const handleInputChange = (e) => {
      setValor(e.target.value);
    };
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
              />
            </div>
            <div>
              <p>Valor</p>
              <input
                placeholder="Informe o valor do item"
                type="text"
                name="itens"
              />
            </div>
            <div>
              <p>Descrição</p>
              <input
                placeholder="Infore a descrição do item"
                type="text"
                name="dataEntrega"
              />
            </div>
          </Formulario>
          <Buttons>
            <button onClick={setModalOpen}>Cancelar</button>
            <button>Salvar</button>
          </Buttons>
        </ModalStyle>
      </Container>
    );
  }
  return null;
};

export default AdicionarItem;
