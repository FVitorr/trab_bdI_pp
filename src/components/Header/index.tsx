import React from "react";
import { Link } from 'react-router-dom';
import logo from './../../assets/Group 17.png';

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} />
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/itens">
          <button>Itens</button>
        </Link>
        <Link to="/clientes">
          <button>Clientes</button>
        </Link>
        <Link to="/pedidos">
          <button>Pedidos</button>
        </Link>
      </div>
    </Container>
  );
};

export default Header;