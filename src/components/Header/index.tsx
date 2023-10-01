import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
        <button>PontoPerfeito</button>
        <button>Itens</button>
        <button>Clientes</button>
        <button>Pagamentos</button>
        <button>Pedidos</button>
    </ Container>
  );
};

export default Header;
