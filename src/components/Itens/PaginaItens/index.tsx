import React, { useState } from "react";
import axios from "axios";

import { Container, Title, InputButton, FieldNames } from "./styles";
import AdicionarItem from "../CadastraItem";
import Item from "../Item-Item";
import Header from "../../Header";

export interface IItem {
  id: string;
  nome: string;
  valor: number;
  descricao: string;
}

const Itens: React.FC = () => {

  // const [inputValues, setInputValues] = useState({
  //   nome: "",
  //   valor: 0,
  //   descricao: ""
  // });

  // const [clientes, setItens] = useState<IItem[]>([]);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setInputValues(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const adicionarNovoItem = async () => {
  //   try {
  //     const novoItem: IItem = {
  //       nome: inputValues.nome,
  //       valor: inputValues.valor,
  //       descricao: inputValues.descricao
  //     };
  //     console.log(novoItem)
  //     // Faz a chamada POST para a sua rota do servidor com o novo cliente
  //     await axios.post("http://localhost:8080/itens", novoItem);

  //     // Após o POST bem-sucedido, adiciona o cliente ao estado clientes
  //     setItens(prevState => [...prevState, novoItem]);

  //     // Limpa os valores dos inputs após adicionar o cliente
  //     setInputValues({
  //       nome: "",
  //       valor: 0,
  //       descricao: ""
  //     });
  //   } catch (error) {
  //     console.error("Erro ao adicionar novo item:", error);
  //   }
  // };

  // const getItens = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/itens");
  //     const itenResponse: IItem[] = response.data; // Recebe a lista de item do servidor
  //     console.log("itenResponse", itenResponse);
  //     setItens(itenResponse); // Atualiza o estado clientes com a lista recebida do servidor
  //   } catch (error) {
  //     console.error("Erro ao buscar Iten:", error);
  //   }
  // };

  // useEffect(() => {
  //   getItens();
  // }, []);
  const [openModal, setOpenModal] = useState(false)

  const items = [
    { nome: 'Item 1', valor: 19.99, descricao: 'Descrição do Item 1' },
    { nome: 'Item 2', valor: 29.99, descricao: 'Descrição do Item 2' },
    { nome: 'Item 3', valor: 14.99, descricao: 'Descrição do Item 3' },
    { nome: 'Item 4', valor: 24.99, descricao: 'Descrição do Item 4' },
    { nome: 'Item 5', valor: 9.99, descricao: 'Descrição do Item 5' },
    { nome: 'Item 6', valor: 39.99, descricao: 'Descrição do Item 6' },
    { nome: 'Item 7', valor: 49.99, descricao: 'Descrição do Item 7' },
    { nome: 'Item 8', valor: 12.99, descricao: 'Descrição do Item 8' },
    { nome: 'Item 9', valor: 18.99, descricao: 'Descrição do Item 9' },
    { nome: 'Item 10', valor: 34.99, descricao: 'Descrição do Item 10' },
  ];

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
            id={'Código'}
            key={index}
            name={item.nome}
            valor={item.valor}
            descricao={item.descricao}
          />
        ))}
        <AdicionarItem isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
          name={"NAME"} valor={14} descricao={"status"}>
          Conteúdo do modal
        </AdicionarItem>
      </Container >
    </>
  );
};

export default Itens;
