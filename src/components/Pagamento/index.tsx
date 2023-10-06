import React, { useEffect, useState } from "react";

import { Container, InfoPagamento, Check, View } from "./styles";

interface Props {
  pedido: string;
  valor: number;
  status: string;
}

const Pagamento: React.FC<Props> = ({ pedido, valor, status }) => {

  return (
    <Container>
      <InfoPagamento>
        <p>{pedido}</p>
        <p>R$ {valor}</p>
        <p>{status}</p>
        <div><View/><Check/></div>
      </InfoPagamento>
    </Container>
  );
};

export default Pagamento;
