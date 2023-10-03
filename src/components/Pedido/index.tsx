import React, { useEffect, useState } from "react";

import { Container, InfoPedido, ItensPedido } from "./styles";

interface Props{
  name: string;
  valor: number;
  status: string;
  itens: string[];
}

const Pedido: React.FC<Props> = ({name, valor, itens, status}) => {
  const itensFormatados = itens.join(", ");

  return (
    <Container>
    <InfoPedido>
    <p>{name}</p>
    <p>R$ {valor}</p>
    <p>{status}</p>
    </InfoPedido>
    <ItensPedido>
    <p>{itensFormatados}</p>
    </ItensPedido>
    </Container>
  );
};

export default Pedido;
