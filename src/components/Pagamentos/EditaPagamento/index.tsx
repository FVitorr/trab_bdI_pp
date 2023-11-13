import React, { useEffect, useState } from "react";

import { Container, ModalStyle, Formulario, Buttons } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;

  name: string;
  valor: number;
  status: string;
  itens: string;
}

const EditarPagamento: React.FC<Props> = ({
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
            <p>Editar pagamento</p>
            <div>
              <p>Cliente</p>
              <input
                placeholder="Cliente"
                type="text"
                name="name"
                defaultValue={name}
              />
            </div>
            <div>
              <p>Item</p>
              <input
                placeholder="Itens"
                type="text"
                name="itens"
                defaultValue={itens} // Exibe os itens como uma string separada por vírgula
              />
            </div>
            <div>
              <p>Data de entrega</p>
              <input
                placeholder="Data de entrega"
                type="text"
                name="dataEntrega"
                defaultValue={''} // Adicione o estado correspondente para data de entrega
              />
            </div>
            <div>
              <p>Observações</p>
              <input
                placeholder="Observações"
                type="text"
                name="status"
                defaultValue={status}
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

export default EditarPagamento;
