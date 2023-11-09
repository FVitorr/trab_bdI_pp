import React, { useEffect, useState } from "react";

import { Container, InfoPedido, EditButton, DeleteButton } from "./styles";

interface Props {
  name: string;
  valor: number;
  status: string;
  itens: string[];
}


const Pedido: React.FC<Props> = ({ name, valor, itens, status }) => {

  const itensFormatados = itens.join(", ");

  return (
    <Container>
      <InfoPedido>
        <p>{name}</p>
        <p>{itensFormatados}</p>
        <p>R$ {valor}</p>
        <p>{status}</p>
        <div>
          <EditButton />
          <DeleteButton />
        </div>
      </InfoPedido>
    </Container>
  );
};

export default Pedido;
