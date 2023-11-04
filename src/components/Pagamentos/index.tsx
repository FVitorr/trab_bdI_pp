import React, { useEffect, useState } from "react";

import { Container, Formulario, ListPagamentos } from "./styles";
import Pagamento from "../Pagamento";
import Header from "../Header copy";

const Pagamentos: React.FC = () => {
  let data
  let response
  useEffect(() => {
    // Chama a API quando o componente é montado
    const fetchData = async () => {
      try {
        response = await fetch("http://localhost:8080/testes"); // Substitua "/testes" pelo URL real da sua API
        data = await response.json();
        console.log(response, data)

        // Faça algo com os dados da API, se necessário
      } catch (error) {
        console.error("Erro ao chamar a API:", error);
      }
    };

    fetchData(); // Chama a função de busca quando o componente é montado

    // Cleanup da função de efeito (opcional)
    return () => {
      // Alguma lógica de limpeza, se necessário
    };
  }, []); // O segundo argumento vazio faz com que o efeito seja executado apenas uma vez, quando o componente é montado
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
