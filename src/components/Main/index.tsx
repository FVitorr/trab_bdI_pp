import React, { useEffect, useState } from "react";
import maquina from './../../assets/maquina.png';
import PedidosAbertos from "../PedidosAbertos";

import { Container, Header, InfoPP, Footer } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>PontoPerfeito</button>
        <button>Itens</button>
        <button>Clientes</button>
        <button>Pagamentos</button>
        <button>Pedidos</button>
      </ Header>

      <InfoPP>
      <div>
      <h1>Ponto Perfeito</h1>
      <p>Transformamos tecidos em obras-primas e sonhos em realidade. Seja para um evento especial ou para o dia a dia, confie-nos seu desejo de estilo e deixe-nos costurar a perfeição para você.</p>
      </div>
      <img src={maquina}/>
      </ InfoPP>

      <PedidosAbertos />

      <Footer>
      <p>Trabalho desenvolvido para a disciplina de Banco de Dados I. <br/>Desenvolvido por: <br/>Augusto Leal - github.com/augustoLeal <br/>Breno Alves - github.com/break1st <br/>Vitor Augusto - github.com/FVitorr</p>

      </ Footer>
    </ Container>
  );
};

export default Main;
