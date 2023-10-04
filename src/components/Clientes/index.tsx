import React, { useEffect, useState } from "react";

import { Container, Formulario, ListClientes } from "./styles";
import Cliente from "../Cliente";
import Header from "../Header copy";

const Clientes: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Formulario>
            <p>Clientes</p>
            <input placeholder="Nome" type="text" />
            <input placeholder="Endereço" type="text" />
            <input placeholder="Telefone" type="text" />
            <input placeholder="Email" type="text" />
            <div>
              <button>Enviar</button>
              <button>Limpar</button>
            </div>
          </Formulario>

          <ListClientes>
            <Cliente name={"Joao"} email={"Joao_Cesar@gmail.com"} endereco={"Rua das Pedras, 14 Belo Horizonte - MG"} telefone={"(31)923123122"} />
            <Cliente name={"Joao"} email={"Joao_Cesar@gmail.com"} endereco={"Rua das Pedras, 14 Belo Horizonte - MG"} telefone={"(31)923123122"} />
            <Cliente name={"Joao"} email={"Joao_Cesar@gmail.com"} endereco={"Rua das Pedras, 14 Belo Horizonte - MG"} telefone={"(31)923123122"} />
            <Cliente name={"Joao"} email={"Joao_Cesar@gmail.com"} endereco={"Rua das Pedras, 14 Belo Horizonte - MG"} telefone={"(31)923123122"} />
          </ListClientes>
        </div>
      </ Container>
    </>
  );
};

export default Clientes;
