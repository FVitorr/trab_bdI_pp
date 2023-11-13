import React, { useState } from "react";

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;
  id: string;
  name: string;
  endereco: string;
  telefone: string;
  email: string;
}

const EditarCliente: React.FC<Props> = ({
  isOpen,
  setModalOpen,
  name,
  endereco,
  telefone,
  email
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
            <p>Editar cliente</p>
            <div>
              <p>Nome</p>
              <input
                placeholder="Informe o nome do cliente"
                type="text"
                name="name"
                defaultValue={name}
              />
            </div>
            <div>
              <p>Endereço</p>
              <input
                placeholder="Informe o endereco do cliente"
                type="text"
                name="endereco"
                defaultValue={endereco}
              />
            </div>
            <div>
              <p>Telefone</p>
              <input
                placeholder="Informe o telefone do cliente"
                type="text"
                name="telefone"
                defaultValue={telefone}
              />
            </div>
            <div>
              <p>Email</p>
              <input
                placeholder="Informe o email do cliente"
                type="text"
                name="status"
                defaultValue={email}
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

export default EditarCliente;
