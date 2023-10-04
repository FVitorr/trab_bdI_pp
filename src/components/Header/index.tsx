import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Container } from "./styles";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container scrolled={scrolled}>
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