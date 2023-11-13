import React, { useState } from "react";

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;

  id: string
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
  if (isOpen) {
    const [value_, setValor] = useState("");
    const handleInputChange = (e) => {
      setValor(e.target.value);
    };
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
                defaultValue={name}
              />
            </div>
            <div>
              <p>Valor</p>
              <input
                placeholder="Informe o valor do item"
                type="text"
                name="valor"
                defaultValue={valor}
              />
            </div>
            <div>
              <p>Descrição</p>
              <input
                placeholder="Informe a descrição do item"
                type="text"
                name="descricao"
                defaultValue={descricao}
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

export default EditarItem;
