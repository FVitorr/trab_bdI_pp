import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


import { Container } from "./styles";

const Header: React.FC = () => {

  return (
    <Container>
        <Link to="/"><button>PontoPerfeito</button></Link>
        <button>Itens</button>
        <Link to="/clientes"><button>Clientes</button></Link>
        <button>Pagamentos</button>
        <Link to="/pedidos"><button>Pedidos</button></Link>
    </ Container>
  );
};

export default Header;
