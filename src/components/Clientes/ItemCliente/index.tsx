import React, { useState } from "react";

import { Container, DeleteButton, EditButton, InfoCliente } from "./styles";
import EditarCliente from "../EditaCliente";

interface Props {
  id: string
  name: string;
  endereco: string;
  telefone: string;
  email: string;
}

const Cliente: React.FC<Props> = ({ name, endereco, telefone, email }) => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <Container>
      <InfoCliente>
        <p>{"Código"}</p>
        <p>{name}</p>
        <p>{endereco}</p>
        <p>{telefone}</p>
        <p>{email}</p>
        <div>
          <button>
            <EditButton id={name} onClick={() => setOpenModal(true)}
            />
          </button>
          <button>
            <DeleteButton />
          </button>
        </div>
      </InfoCliente>
      <EditarCliente isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
        name={name} email={email} endereco={endereco} telefone={telefone}>
        Conteúdo do modal
      </EditarCliente>
    </Container>
  );
};

export default Cliente;
