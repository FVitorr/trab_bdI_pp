import React, { useEffect, useState } from "react";

import { Container, Formulario, Descriptions } from "./styles";
import Cliente from "../Cliente";
import Header from "../Header/index";
import Footer from "../Footer";



const Clientes: React.FC = () => {
  return (
    <>
    <Container>
      <Header />
      <Formulario>
        <p>Cliente</p>
        <input placeholder="Nome" type="text" />
        <input placeholder="Endereço" type="text" />
        <input placeholder="Telefone" type="text" />
        <input placeholder="Email" type="text" />
        <div>
        <button>Enviar</button>
        <button>Limpar</button>
        </div>
      </Formulario>

      <Descriptions>
        <p>Nome</p>
        <p>Endereço</p>
        <p>Telefone</p>
        <p>Email</p>
      </Descriptions>



      <Cliente name={"Joao"} email={"Joao_Cesar@gmail.com"} endereco={"Rua das Pedras, 14 Belo Horizonte - MG"} telefone={"(31)923123122"} />
      <Cliente name={"Joao"} email={"Joao_Cesar@gmail.com"} endereco={"Rua das Pedras, 14 Belo Horizonte - MG"} telefone={"(31)923123122"} />
      <Cliente name={"Joao"} email={"Joao_Cesar@gmail.com"} endereco={"Rua das Pedras, 14 Belo Horizonte - MG"} telefone={"(31)923123122"} />
      <Cliente name={"Joao"} email={"Joao_Cesar@gmail.com"} endereco={"Rua das Pedras, 14 Belo Horizonte - MG"} telefone={"(31)923123122"} />
    </ Container>
    <Footer />
    </>
  );
};

export default Clientes;
