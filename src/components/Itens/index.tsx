import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Formulario, ListItens } from "./styles";
import Item from "../Item";
import Header from "../Header copy";

export interface IItem {
  nome: string;
  valor: number;
  descricao: string;
}    

const Itens: React.FC = () => {

    const [inputValues, setInputValues] = useState({
        nome: "",
        valor: 0,
        descricao: ""
      });
      
      const [clientes, setItens] = useState<IItem[]>([]);
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const adicionarNovoItem = async () => {
        try {
          const novoItem: IItem = {
            nome: inputValues.nome,
            valor: inputValues.valor,
            descricao: inputValues.descricao
          };
          console.log(novoItem)
          // Faz a chamada POST para a sua rota do servidor com o novo cliente
          await axios.post("http://localhost:8080/itens", novoItem);
      
          // Após o POST bem-sucedido, adiciona o cliente ao estado clientes
          setItens(prevState => [...prevState, novoItem]);
      
          // Limpa os valores dos inputs após adicionar o cliente
          setInputValues({
            nome: "",
            valor: 0,
            descricao: ""
          });
        } catch (error) {
          console.error("Erro ao adicionar novo item:", error);
        }
      };
    
      const getItens = async () => {
        try {
          const response = await axios.get("http://localhost:8080/itens");
          const itenResponse: IItem[] = response.data; // Recebe a lista de item do servidor
          console.log("itenResponse", itenResponse);
          setItens(itenResponse); // Atualiza o estado clientes com a lista recebida do servidor
        } catch (error) {
          console.error("Erro ao buscar Iten:", error);
        }
      };
    
      useEffect(() => {
        getItens();
      }, []);

  return (
    <>
      <Header />
      <Container>
        <div>
          <Formulario>
            <p>Itens</p>
            <input placeholder="Nome" 
            type="text" 
            name="nome" 
            value={inputValues.nome}
            onChange={handleInputChange}/>
            <input placeholder="Valor"
            name="valor" 
            type="text"            
            value={inputValues.valor}
            onChange={handleInputChange}/>
            <input placeholder="Descricao"
            name="descricao" 
            type="text"           
            value={inputValues.descricao}
            onChange={handleInputChange}/>
            <div>
            <button onClick={adicionarNovoItem}>Enviar</button>
              <button>Limpar</button>
            </div>
          </Formulario>

          <ListItens>
            {clientes.map((item) => (
              <Item
                name={item.nome}
                valor={item.valor}
                descricao={item.descricao}
              />
            ))}
          </ListItens>

        </div>
      </Container>
    </>
  );
};

export default Itens;
