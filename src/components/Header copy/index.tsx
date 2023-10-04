import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Container } from "./styles";

const Header: React.FC = () => {

  return (
    <Container>
      <Link to="/">
        <button>INICIO</button>
      </Link>
      <Link to="/itens">
        <button>ITENS</button>
      </Link>
      <Link to="/clientes">
        <button>CLIENTES</button>
      </Link>
      <Link to="/pagamentos">
        <button>PAGAMENTOS</button>
      </Link>
      <Link to="/pedidos">
        <button>PEDIDOS</button>
      </Link>
    </Container>
  );
};

export default Header;