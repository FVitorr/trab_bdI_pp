import React, { useState, useEffect } from "react";
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
  const labelCSS = {
    border: "1px solid black",
    color: "#AAAAAA",
    display: "grid",
    gridTemplateColumns: "0.5fr 0.5fr 1fr 1fr",
    justifyItems: "start", // Alinha os itens à esquerda
    padding: "0.5rem",
  };

  const [ItemsOption, setItems] = useState<IItem[]>([]);
  const [ClientesOption, setClientes] = useState<ICliente[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [expanded_c, setExpanded_c] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState<number | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    // Carregar itens do backend ao montar o componente
    carregarClientes();
    carregarItens();
  }, []);

  const carregarItens = async () => {
    try {
      const response = await axios.get<IItem[]>("http://localhost:8080/itens");
      setItems(response.data);
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

  const carregarClientes = async () => {
    try {
      const response = await axios.get<ICliente[]>("http://localhost:8080/clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
    }
  };

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

  const [dataEntrega, setDataEntrega] = useState<string>("");
  const [observacoes, setObservacoes] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "dataEntrega") {
      setDataEntrega(value);
    } else if (name === "status") {
      setObservacoes(value);
    }
  };

  const handleSalvarClick = () => {
    console.log("Cliente selecionado:", clienteSelecionado);
    console.log("Itens selecionados:", selectedItems);
    console.log("Data de entrega:", dataEntrega);
    console.log("Observações:", observacoes);

    // Aqui você pode realizar a lógica de envio dos dados para o backend, se necessário

    // Fechar o modal após salvar
    setModalOpen();
  };

  return (
    isOpen && (
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
                        {ClientesOption.find(
                          (cliente) => cliente.id === clienteSelecionado
                        )?.nome}
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
                        checked={cliente.id === clienteSelecionado}
                        onChange={() =>
                          setClienteSelecionado(cliente.id)
                        }
                      />
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
                        (option) => option.id.toString() === itemId
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
                    <label key={index} htmlFor={Options.id.toString()} style={labelCSS}>
                      <input
                        type="checkbox"
                        id={Options.id.toString()}
                        checked={selectedItems.includes(Options.id.toString())}
                        onChange={() => handleCheckboxChange(Options.id.toString())}
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
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Observações</p>
              <input placeholder="Observações" type="text" name="status" 
              onChange={handleInputChange}
              />
            </div>
          </Formulario>
          <Buttons>
            <button onClick={setModalOpen}>Cancelar</button>
            <button onClick={handleSalvarClick}>Salvar</button>
          </Buttons>
        </ModalStyle>
      </Container>
    )
  );
};

export default AdicionarPedido;
