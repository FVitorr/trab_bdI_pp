import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import Pedidos from "../Pedidos";

const Header: React.FC = () => {
  const [exibirPedidos, setExibirPedidos] = useState(false);

  return (
    <Container>
      <button onClick={() => setExibirPedidos(true)}>Pedidos</button>
      {exibirPedidos ? <Pedidos /> : null}
        <button>Itens</button>
        <button>Clientes</button>
        <button>Pagamentos</button>
        <button>Pedidos</button>
    </ Container>
  );
};

export default Header;
