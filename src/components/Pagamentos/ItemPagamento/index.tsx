import React, { useEffect, useState } from "react";

import { EditButton, DeleteButton } from "./../../Pedidos/ItemPedido/styles";
import { Container, InfoPagamento, Check, View } from "./styles";
import EditarPagamento from "../EditaPagamento";

interface IPagamentos {
  id: string;
  idPedido: string;
  price: string;
  status: string;
}

const Pagamento: React.FC<IPagamentos> = ({ id, idPedido, price, status }) => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <Container>
      <InfoPagamento>
        <p>{id}</p>
        <p> {idPedido}</p>
        <p>R$ {price}</p>
        <p>{status}</p>
        <div>
          <button>
            <EditButton id={name} onClick={() => setOpenModal(true)}></EditButton>
          </button>
          <button>
            <DeleteButton />
        </button>
        </div>
        
      </InfoPagamento>

      <EditarPagamento isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
        name={id} valor={1} status={id} itens={id}>
        Conteúdo do modal
      </EditarPagamento>
      
    </Container>
  );
};

export default Pagamento;