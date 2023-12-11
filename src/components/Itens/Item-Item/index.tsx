import React, { useState } from "react";
import axios from "axios";

import { Container, InfoItem, EditButton, DeleteButton } from "./styles";
import EditarItem from "../EditaItem";

interface Props {
  id: number;
  name: string;
  valor: number;
  descricao: string;
}

const Item: React.FC<Props> = ({ id, name, valor, descricao }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    try {
        const url = `http://localhost:8080/itens/${id}`;
        console.log(url)
      await axios.delete(url);
      setOpenModal(false);
    } catch (error) {
      console.error("Erro ao excluir item:", error);
    }
  };

  return (
    <Container>
      <InfoItem>
        <p>{id}</p>
        <p>{name}</p>
        <p>R$ {valor}</p>
        <p>{descricao}</p>
        <div>
          <button>
            <EditButton id={id} onClick={() => setOpenModal(true)} />
          </button>
          <button>
            <DeleteButton id={id} onClick={handleDelete} />
          </button>
        </div>
      </InfoItem>
      <EditarItem
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        id={id}
        name={name}
        valor={valor}
        descricao={descricao}
      >
        Conteúdo do modal
      </EditarItem>
    </Container>
  );
};

export default Item;
