import React, { useEffect, useState } from "react";

import { Container, ModalStyle,Formulario } from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;

  nome:string;
}

const EditarPedido: React.FC<Props> = ({ isOpen, setModalOpen}) => {
  if (isOpen) {
    return (
      <Container>
        <ModalStyle>
          <Formulario>
            <p>Pedidos</p>
            <input placeholder="Cliente" type="text" />
            <input placeholder="Itens" type="text" />
            <input placeholder="Data de entrega" type="text" />
            <input placeholder="Observações" type="text" />
            <div>
              <button>Salvar</button>
              <button onClick={setModalOpen}>Cancelar</button>
            </div>
          </Formulario>
        </ModalStyle>
      </Container>
    );
  }
  return null
};

export default EditarPedido;
