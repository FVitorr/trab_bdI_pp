import React, { useState } from "react";
import axios from "axios";

import { Container, DeleteButton, EditButton, InfoCliente } from "./styles";
import EditarCliente from "../EditaCliente";

interface Props {
  id: number;
  nome: string;
  rua: string;
  bairro :string;
  numero_endereco :string;
  cidade :string;
  estado:string;
  telefone: string;
  email: string;
}

const Cliente: React.FC<Props> = ({ id, nome, rua, bairro, numero_endereco, cidade, estado, telefone, email }) => {

  const [openModal, setOpenModal] = useState(false)

  const handleDelete = async () => {
    try {
        const url = `http://localhost:8080/clientes/${id}`;
        console.log(url)
      await axios.delete(url);

      setOpenModal(false);
    } catch (error) {
      console.error("Erro ao excluir item:", error);
    }
  };
  console.log(rua)
  const endereco = `${rua}, ${numero_endereco}, ${bairro}`
  return (
    <Container>
      <InfoCliente>
        <p>{id}</p>
        <p>{nome}</p>
        <p>{endereco}</p>
        <p>{telefone}</p>
        <p>{email}</p>
        <div>
          <button>
            <EditButton id={id} onClick={() => setOpenModal(true)}
            />
          </button>
          <button>
          <DeleteButton id={id} onClick={handleDelete} />
          </button>
        </div>
      </InfoCliente>
      <EditarCliente 
        isOpen={openModal} 
        setModalOpen={() => setOpenModal(!openModal)}
        id={id}
        nome={nome}
        email={email}
        telefone={telefone}
        rua={rua}
        bairro={bairro}
        cidade={cidade}
        estado={estado}
        numero_endereco={numero_endereco}
        >
        Conteúdo do modal
      </EditarCliente>
    </Container>
  );
};

export default Cliente;
