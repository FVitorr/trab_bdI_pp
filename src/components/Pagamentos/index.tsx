import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Container, Formulario, ListPagamentos } from "./styles";
import Pagamento from "../Pagamento";
import Header from "../Header copy";

export interface IPagamento {
  pedido: string;
  valor: number;
  status: string;
}

const Pagamentos: React.FC = () => {
  const [pagamentos, setPagamentos] = useState<IPagamento[]>([]);

  const getPagamentos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/pagamentos');
      const pagamentosResponse: IPagamento[] = response.data; // Recebe a lista de pagamentos do servidor
      console.log("pagamentosResponse", pagamentosResponse);
      setPagamentos(pagamentosResponse); // Atualiza o estado pagamentos com a lista recebida do servidor
    } catch (error) {
      console.error('Erro ao buscar pagamentos:', error);
    }
  };

  useEffect(() => {
    getPagamentos();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div>
          <Formulario>
            <p>Pagamentos</p>
          </Formulario>

          <ListPagamentos>
            {pagamentos.map((pagamento) => (
              <Pagamento key={pagamento.pedido} pedido={pagamento.pedido} valor={pagamento.valor} status={pagamento.status} />
            ))}
          </ListPagamentos>
        </div>
      </Container>
    </>
  );
};

export default Pagamentos;
