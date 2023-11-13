import React, { useEffect, useState } from "react";

import { Container, InfoPagamento, Check, View } from "./styles";

interface IPagamentos {
  id: string;
  idPedido: string;
  price: string;
  status: string;
}

const Pagamento: React.FC<IPagamentos> = ({ id, idPedido, price, status }) => {
  return (
    <Container>
      <InfoPagamento>
        <p>{id}</p>
        <p> {idPedido}</p>
        <p>R$ {price}</p>
        <p>{status}</p>
        <div>
          <View />
          <Check />
        </div>
      </InfoPagamento>
    </Container>
  );
};

export default Pagamento;