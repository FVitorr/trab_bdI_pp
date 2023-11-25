import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Title, InputButton, FieldNames } from "./styles";
import AdicionarItem from "../CadastraItem";
import Item from "../Item-Item";
import Header from "../../Header";

export interface IItem {
  id: number;
  nome: string;
  valor: number;
  descricao: string;
}

const Itens: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    // Carregar itens do backend ao montar o componente
    carregarItens();
  }, []);

  const carregarItens = async () => {
    try {
      const response = await axios.get("http://localhost:8080/itens");
      setItems(response.data);
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

  const adicionarItem = async (novoItem: IItem) => {
    try {
      await axios.post("http://localhost:8080/itens", novoItem);
      // Recarregar a lista de itens após adicionar um novo item
      carregarItens();
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Itens</p>
          <p>Estes são seus itens cadastrados.</p>
        </Title>
        <InputButton>
          <input placeholder="Pesquisar" />
          <button onClick={() => setOpenModal(true)}><b>Adicionar item</b></button>
        </InputButton>
        <FieldNames>
          <p>Código</p>
          <p>Nome</p>
          <p>Valor</p>
          <p>Descrição</p>
          <p>Ações</p>
        </FieldNames>
        {items.map((item, index) => (
          <Item
            id={item.id}
            key={index}
            name={item.nome}
            valor={item.valor}
            descricao={item.descricao}
          />
        ))}
        <AdicionarItem
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
          adicionarItem={adicionarItem}
        >
          Conteúdo do modal
        </AdicionarItem>
      </Container>
    </>
  );
};

export default Itens;
