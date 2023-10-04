import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Container } from "./styles";

const Header: React.FC = () => {

  return (
    <Container>
      <Link to="/">
        <button>INICIO</button>
      </Link>
      <button>ITENS</button>
      <Link to="/clientes">
        <button>CLIENTES</button>
      </Link>
      <button>PAGAMENTOS</button>
      <Link to="/pedidos">
        <button>PEDIDOS</button>
      </Link>
    </Container>
  );
};

export default Header;