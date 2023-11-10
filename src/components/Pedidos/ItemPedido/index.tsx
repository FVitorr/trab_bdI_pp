import React, { useEffect, useState } from "react";

import { Container, InfoPedido, EditButton, DeleteButton } from "./styles";
import EditarPedido from "../EditaPedido";

interface Props {
  name: string;
  valor: number;
  status: string;
  itens: string[];
}


const Pedido: React.FC<Props> = ({ name, valor, itens, status }) => {

  const itensFormatados = itens.join(", ");
  const [openModal, setOpenModal] = useState(false)
  
  
  return (
    <Container>
      <InfoPedido>
        <p>{name}</p>
        <p>{itensFormatados}</p>
        <p>R$ {valor}</p>
        <p>{status}</p>
        <div>
          <button>
          <EditButton id={name}  onClick={() => setOpenModal(true)}
          />
          </button>
          <button>
          <DeleteButton />
          </button>
        </div>
      </InfoPedido>
      <EditarPedido isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
      name = {name} valor = {valor} status = {status} itens = {itens}>
        Conteúdo do modal
      </EditarPedido>
    </Container>
  );
};

export default Pedido;
