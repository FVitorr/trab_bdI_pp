import React, { useState } from "react";
import axios from "axios";
import { Container, InfoPedido, EditButton, DeleteButton } from "./styles";
import EditarPedido from "../EditaPedido";
import { IItem } from "../../Itens/PaginaItens";

interface Props {
  id: number;
  nomeCliente: string;
  itens: IItem[];
  valorTotal: number;
  observacao: string;
  dataEntrega: string;
  statusPedido: string;
  statusPagamento: string;
}

const Pedido: React.FC<Props> = ({ id, nomeCliente, itens, valorTotal, statusPedido, dataEntrega, statusPagamento, observacao }) => {
  const partesData = dataEntrega.split("-");
  const dataFormatada: string = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;
  console.log(dataFormatada);
  const itensFormatados = itens.map(item => item.nome).join(", ");
  
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    try {
        const url = `http://localhost:8080/pedidos/${id}`;
        console.log(url)
      await axios.delete(url);

      setOpenModal(false);
    } catch (error) {
      console.error("Erro ao excluir item:", error);
    }
  };

  return (
    <Container>
      <InfoPedido>
        <p>{id}</p>
        <p>{nomeCliente}</p>
        <p>{itensFormatados}</p>
        <p>R$ {valorTotal}</p>
        <p>{statusPedido}</p>
        <p>{statusPagamento}</p>
        <p>{dataFormatada}</p>
        <div>
          <button>
            <EditButton id={id.toString()} onClick={() => setOpenModal(true)} />
          </button>
          <button>
          <DeleteButton id={id} onClick={handleDelete} />
          </button>
        </div>
      </InfoPedido>
      <EditarPedido
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        id = {id}
        nomeCliente = {nomeCliente}
        itens={itens}
        dataentrega = {dataEntrega}
        statusPedido={statusPedido}
        statusPagamento={statusPagamento}
        observacao = {observacao}
      />
        
    </Container>
  );
};

export default Pedido;
