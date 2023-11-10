import React, { useEffect, useState } from "react";

import { Container, ModalStyle, Formulario } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;

  name: string;
  valor: number;
  status: string;
  itens: string[];
}

const EditarPedido: React.FC<Props> = ({
  isOpen,
  setModalOpen,
  name,
  valor,
  status,
  itens,
}) => {
  if (isOpen) {
    const [value_,setValor] = useState("");
    const handleInputChange = (e) => {
      setValor(e.target.value);
    };
    return (
      <Container>
        <ModalStyle>
          <Formulario>
            <p>Pedidos</p>
            <input
              placeholder="Cliente"
              type="text"
              name="name"
              defaultValue={name}
            />
            <input
              placeholder="Itens"
              type="text"
              name="itens"
              defaultValue={itens.join(", ")} // Exibe os itens como uma string separada por vírgula
            />
            <input
              placeholder="Data de entrega"
              type="text"
              name="dataEntrega"
              defaultValue={''} // Adicione o estado correspondente para data de entrega
            />
            <input
              placeholder="Observações"
              type="text"
              name="status"
              defaultValue={status}
            />
            <div>
              <button>Salvar</button>
              <button onClick={setModalOpen}>Cancelar</button>
            </div>
          </Formulario>
        </ModalStyle>
      </Container>
    );
  }
  return null;
};

export default EditarPedido;
