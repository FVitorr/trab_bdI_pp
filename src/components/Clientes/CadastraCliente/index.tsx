import React, { useEffect, useState } from "react";

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;

  name: string;
  endereco: string;
  telefone: string;
  email: string;
}

const AdicionarCliente: React.FC<Props> = ({
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
            <p>Cadastro de cliente</p>
            <div>
              <p>Nome</p>
              <input
                placeholder="Informe o nome do cliente"
                type="text"
                name="name"
              />
            </div>
            <div>
              <p>Endereço</p>
              <input
                placeholder="Informe o endereço do cliente"
                type="text"
                name="endereco"
              />
            </div>
            <div>
              <p>Telefone</p>
              <input
                placeholder="Informe o telefone do cliente"
                type="text"
                name="telefone"
              />
            </div>
            <div>
              <p>Email</p>
              <input
                placeholder="Informe o email do cliente"
                type="text"
                name="status"
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

export default AdicionarCliente;
