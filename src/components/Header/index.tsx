import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


import { Container } from "./styles";
import Pedidos from "../Pedidos";

const Header: React.FC = () => {

  return (
    <Container>
      <button><Link to="/">PontoPerfeito</Link></button>
        <button>Itens</button>
        <button>Clientes</button>
        <button>Pagamentos</button>
        <button><Link to="/pedidos">Pedidos</Link></button>
    </ Container>
  );
};

export default Header;
