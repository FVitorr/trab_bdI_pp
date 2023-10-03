import React, { useEffect, useState } from "react";

import { Container, InfoCliente} from "./styles";

interface Props{
  name: string;
  endereco: string;
  telefone: string;
  email: string;
}

const Cliente: React.FC<Props> = ({name, endereco, telefone, email}) => {

  return (
    <Container>
      <InfoCliente>  
        <p>{name}</p>
        <p>{endereco}</p>
        <p>{telefone}</p>
        <p>{email}</p>
      </InfoCliente>
    </Container>
  );
};

export default Cliente;
