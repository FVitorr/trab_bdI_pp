import React, { useEffect, useState } from "react";

import { Container, InfoPedido, Imagem } from "./styles";

interface Props{
  name: string;
  valor: number;
  itens: string[];
}

const Pedido: React.FC<Props> = ({name, valor, itens}) => {
  const itensFormatados = itens.join(", ");

  return (
    <Container>
    <Imagem />
    <InfoPedido>
    <div>
    <p>{name}</p>
    <p>R$ {valor}</p>
    </div>
    <p>{itensFormatados}</p>
    </InfoPedido>
    </Container>
  );
};

export default Pedido;
