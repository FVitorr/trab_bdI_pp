import React from "react";

import { Container, Formulario, ListPagamentos } from "./styles";
import Pagamento from "../Pagamento";
import Header from "../Header copy";

const Pagamentos: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Formulario>
            <p>Pagamentos</p>
          </Formulario>

          <ListPagamentos>
            <Pagamento pedido={"Joao"} valor={50.00} status={"Pendente"} />
            <Pagamento pedido={"Joao"} valor={50.00} status={"Pendente"} />
            <Pagamento pedido={"Joao"} valor={50.00} status={"Pendente"} />
            <Pagamento pedido={"Joao"} valor={50.00} status={"Pendente"} />
          </ListPagamentos>
        </div>
      </ Container>
    </>
  );
};

export default Pagamentos;
