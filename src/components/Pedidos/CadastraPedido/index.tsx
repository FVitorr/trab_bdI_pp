import React, { useState, useRef, useEffect } from "react";

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

interface IItens {
  value: string;
  id: string;
  price: string;
}

interface ICliente {
  id: number;
  nome: string;
  cpf: string;
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

    const Options: IItens[] = [
      { value: "opcao1", id: "1", price: "12.2" },
      { value: "opcao2", id: "2", price: "12.2" },
      { value: "opcao3", id: "3", price: "12.2" },
      { value: "opcao4", id: "4", price: "12.2" },
      { value: "opcao1", id: "5", price: "12.2" },
      { value: "opcao2", id: "6", price: "12.2" },
      { value: "opcao3", id: "7", price: "12.2" },
      { value: "opcao4", id: "8", price: "12.2" },
      { value: "opcao1", id: "9", price: "12.2" },
      { value: "opcao2", id: "10", price: "12.2" },
      { value: "opcao3", id: "11", price: "12.2" },
      { value: "opcao4", id: "12", price: "12.2" },
    ];

    const ClientesArray: ICliente[] = [
      { id: 1, nome: "Breno Alves", cpf: "10030020032" },
      { id: 2, nome: "Joao", cpf: "10030020032" },
      { id: 3, nome: "Siclano", cpf: "10030020032" },
      { id: 4, nome: "Fulano", cpf: "10030020032" },
    ];

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
                          ClientesArray.find(
                            (cliente) =>
                              cliente.id === Number(clienteSelecionado)
                          )?.nome
                        }{" "}
                        -{" "}
                        {
                          ClientesArray.find(
                            (cliente) =>
                              cliente.id === Number(clienteSelecionado)
                          )?.cpf
                        }
                      </p>
                    ) : null}
                  </OverSelect>
                  <Down />
                </SelectOpition>
              </div>
              {expanded_c && (
                <Checkboxes>
                  {ClientesArray.map((cliente) => (
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
                      <p>{cliente.cpf}</p>
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
                      const selectedItem = Options.find(
                        (option) => option.id === itemId
                      );
                      return selectedItem ? (
                        <p key={selectedItem.id}> {selectedItem.value} </p>
                      ) : null;
                    })}
                  </OverSelect>
                  <Down />
                </SelectOpition>
              </div>
              {expanded && (
                <Checkboxes>
                  {Options.map((Options, index) => (
                    <label key={index} htmlFor={Options.id} style={labelCSS}>
                      <input
                        type="checkbox"
                        id={Options.id}
                        checked={selectedItems.includes(Options.id)}
                        onChange={() => handleCheckboxChange(Options.id)}
                      />{" "}
                      <p>{Options.id}</p> <p>{Options.value}</p>{" "}
                      <p>R$ {Options.price}</p>
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
