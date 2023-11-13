import React, { useEffect, useState } from "react";

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;

  cliente: string;
  valor: number;
  status: string;
  itens: string[];
}

const AdicionarPedido: React.FC<Props> = ({
  isOpen,
  setModalOpen,
  name,
  valor,
  status,
  itens,
}) => {
  if (isOpen) {
    const [value_, setValor] = useState("");
    const handleInputChange = (e) => {
      setValor(e.target.value);
    };
    return (
      <Container>
        <ModalStyle>
          <Formulario>
            <p>Cadastro de pagamento</p>
            <div>
              <p>Cliente</p>
              <input
                placeholder="Selecione um cliente"
                type="text"
                name="name"
              />
            </div>
            <div>
              <p>Item</p>
              <input
                placeholder="Selecione os itens"
                type="text"
                name="itens"
              />
            </div>
            <div>
              <p>Data de entrega</p>
              <input
                placeholder="Infore a data de entrega"
                type="text"
                name="dataEntrega"
              />
            </div>
            <div>
              <p>Observações</p>
              <input
                placeholder="Observações"
                type="text"
                name="status"
              />
            </div>
          </Formulario>
          <Buttons>
            <button onClick={setModalOpen}>Cancelar</button>
            <button>Salvar</button>
          </Buttons>
        </ModalStyle>
      </Container>
    );
  }
  return null;
};

export default AdicionarPedido;
