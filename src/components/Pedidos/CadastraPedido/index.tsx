import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import {
  Container,
  ModalStyle,
  Formulario,
  Buttons,
  SelectArea,
  SelectOpition,
  OverSelect,
  Down,
  Checkboxes,
} from "./style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;

  cliente: string;
  valor: number;
  status: string;
  itens: string[];
}

interface IItem {
  id: number;
  nome: string;
  valor: number;
  descricao: string;
}

interface ICliente {
  id: number;
  nome: string;
  email: string;
}

const AdicionarPedido: React.FC<Props> = ({ isOpen, setModalOpen }) => {
  if (isOpen) {
    const labelCSS = {
      border: "1px solid black",
      color: "#AAAAAA",
      display: "grid",
      gridTemplateColumns: "0.5fr 0.5fr 1fr 1fr",
      justifyItems: "start", // Alinha os itens à esquerda
      padding: "0.5rem",
    };

    useEffect(() => {
      // Carregar itens do backend ao montar o componente
      carregarClientes();
      carregarItens();
    }, []);

    const [ItemsOption, setItems] = useState<IItem[]>([]);
    const carregarItens = async () => {
      try {
        const response = await axios.get("http://localhost:8080/itens");
        setItems(response.data);
      } catch (error) {
        console.error("Erro ao carregar itens:", error);
      }
    };

    const [ClientesOption, setClientes] = useState<ICliente[]>([]);
    const carregarClientes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/clientes");
        setClientes(response.data);
      } catch (error) {
        console.error("Erro ao carregar itens:", error);
      }
    };

    const [expanded, setExpanded] = useState(false);
    const [expanded_c, setExpanded_c] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState<string[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (id: string) => {
      if (selectedItems.includes(id)) {
        setSelectedItems(selectedItems.filter((item) => item !== id));
      } else {
        setSelectedItems([...selectedItems, id]);
      }
    };

    const handleSelectClick = () => {
      setExpanded_c(!expanded_c);
      if (expanded) {
        setExpanded(!expanded);
      }
    };

    return (
      <Container>
        <ModalStyle>
          <Formulario>
            <p>Cadastro de pedido</p>
            <SelectArea>
              <p>Cliente</p>
              <div
                className="selectBox"
                onClick={handleSelectClick}
                style={{ position: "relative" }}
              >
                <SelectOpition>
                  Selecione o Cliente
                  <OverSelect>
                    {clienteSelecionado ? (
                      <p key={clienteSelecionado}>
                        {
                          ClientesOption.find(
                            (cliente) =>
                              cliente.id === Number(clienteSelecionado)
                          )?.nome
                        }{" "}
                      </p>
                    ) : null}
                  </OverSelect>
                  <Down />
                </SelectOpition>
              </div>
              {expanded_c && (
                <Checkboxes>
                  {ClientesOption.map((cliente) => (
                    <label
                      key={cliente.id}
                      htmlFor={cliente.id.toString()}
                      style={labelCSS}
                    >
                      <input
                        type="radio"
                        id={cliente.id.toString()}
                        checked={cliente.id === Number(clienteSelecionado)}
                        onChange={() =>
                          setClienteSelecionado(cliente.id.toString())
                        }
                      />{" "}
                      <p>{cliente.id}</p> <p>{cliente.nome}</p>{" "}
                      <p>{cliente.email}</p>
                    </label>
                  ))}
                </Checkboxes>
              )}
            </SelectArea>
            <SelectArea>
              <p>Itens</p>
              <div
                className="selectBox"
                onClick={() => setExpanded(!expanded)}
                style={{ position: "relative" }}
              >
                <SelectOpition>
                  Selecione os itens
                  <OverSelect>
                    {selectedItems.map((itemId) => {
                      const selectedItem = ItemsOption.find(
                        (option) => option.id === itemId
                      );
                      return selectedItem ? (
                        <p key={selectedItem.id}> {selectedItem.nome} </p>
                      ) : null;
                    })}
                  </OverSelect>
                  <Down />
                </SelectOpition>
              </div>
              {expanded && (
                <Checkboxes>
                  {ItemsOption.map((Options, index) => (
                    <label key={index} htmlFor={Options.id} style={labelCSS}>
                      <input
                        type="checkbox"
                        id={Options.id}
                        checked={selectedItems.includes(Options.id)}
                        onChange={() => handleCheckboxChange(Options.id)}
                      />{" "}
                      <p>{Options.id}</p> <p>{Options.nome}</p>{" "}
                      <p>R$ {Options.valor}</p>
                    </label>
                  ))}
                </Checkboxes>
              )}
            </SelectArea>
            <div>
              <p>Data de entrega</p>
              <input
                placeholder="Informe a data de entrega"
                type="text"
                name="dataEntrega"
              />
            </div>
            <div>
              <p>Observações</p>
              <input placeholder="Observações" type="text" name="status" />
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
