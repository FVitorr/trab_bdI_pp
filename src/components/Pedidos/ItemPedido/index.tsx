import React, { useState } from "react";

import { Container, InfoPedido, EditButton, DeleteButton } from "./styles";
import EditarPedido from "../EditaPedido";
import { IItem } from "../../Itens/PaginaItens";

interface Props {
  id: number;
  nomeCliente: string | null;
  itens: IItem[];
  valorTotal: number;
  statusPedido: string;
}

const Pedido: React.FC<Props> = ({ id, nomeCliente, itens, valorTotal, statusPedido }) => {
  const itensFormatados = itens.map(item => item.nome).join(", ");
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <InfoPedido>
        <p>{id}</p>
        <p>{nomeCliente}</p>
        <p>{itensFormatados}</p>
        <p>R$ {valorTotal}</p>
        <p>{statusPedido}</p>
        <div>
          <button>
            <EditButton id={id.toString()} onClick={() => setOpenModal(true)} />
          </button>
          <button>
            <DeleteButton />
          </button>
        </div>
      </InfoPedido>
      <EditarPedido
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        id={id}
        nomeCliente={nomeCliente}
        //itens={itens}
        valorTotal={valorTotal}
        statusPedido={statusPedido}
      >
        Conteúdo do modal
      </EditarPedido>
    </Container>
  );
};

export default Pedido;
