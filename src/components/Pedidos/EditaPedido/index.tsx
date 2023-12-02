import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import { parseISO  } from 'date-fns';

import {
  Container, 
  ModalStyle,
  Formulario,
  Buttons,
} from "./style";
import { IItem } from "../../Itens/PaginaItens";
import { Checkboxes, Down, OverSelect, SelectArea, SelectOpition } from "../CadastraPedido/style";

interface Props {
  isOpen: boolean;
  setModalOpen: () => void;
  id: number;
  nomeCliente: string;
  itens: IItem[];
  dataentrega: string;
  statusPedido: string;
  statusPagamento: string;
  observacao: string;
}

const EditarPedido: React.FC<Props> = ({
  isOpen,
  setModalOpen,
  nomeCliente,
  id,
  itens,
  dataentrega: propDataEntrega,
  statusPedido: propStatusPedido,
  statusPagamento: propStatusPagamento,
  observacao
}) => {
  const partesData = propDataEntrega.split("-");
  const dataFormatada: string = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;
  
  const labelCSS = {
    border: "1px solid black",
    color: "#AAAAAA",
    display: "grid",
    gridTemplateColumns: "0.5fr 0.5fr 1fr 1fr",
    justifyItems: "start",
    padding: "0.5rem",
  };

  const [expanded, setExpanded] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [ItemsOption, setItems] = useState<IItem[]>([]);
  const [pagamento, setPagamento] = useState<string>("PENDENTE");
  const [observacoes, setObservacao] = useState<string>(observacao);
  const [dataEntrega, setDataEntrega] = useState<string>(propDataEntrega);
  const [estimativaEntrega, setEstimativaEntrega] = useState<string>(dataFormatada);
  const [statusPedido, setStatusPedido] = useState<string>(propStatusPedido);
  const [statusPagamento, setStatusPagamento] = useState<string>(propStatusPagamento);

  const handleCheckboxChange = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  
  const formatInputDate = (inputDate: string) => {
    const [day, month, year] = inputDate.split('/');
    const formattedDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    return formattedDate;
  };

  const handleDataEntregaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const inputValue = e.target.value;
    const { name, value } = e.target
    // Verifica se a data é válida antes de tentar convertê-la
    // const selectedDate = new Date(inputValue);
    if (name === "estimativaEntrega") {
      const formattedDate = formatInputDate(value);
      setEstimativaEntrega(formattedDate);
    } else if (name === 'observacoes') {
      setObservacao(value);
    }

  };  

  const handlePagamentoChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPagamento(e.target.value);
  };

  const carregarItens = async () => {
    try {
      const response = await axios.get<IItem[]>("http://localhost:8080/itens");
      setItems(response.data);
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

  useEffect(() => {
    carregarItens();
    if (itens && itens.length > 0) {
      const initialItemIds = itens.map((item) => item.id.toString());
      setSelectedItems(initialItemIds);
    }
    console.log(dataEntrega); 
    
  }, [itens]);

  const handleSalvarClick = async () => {
    console.log("Itens selecionados:",selectedItems.map(item_id => parseInt(item_id, 10))),
    console.log("Data de entrega:", estimativaEntrega);
    console.log("Observações:", observacoes);
    console.log("Statuspagamento:", statusPagamento);
    console.log("StatusPedidos:", statusPedido);
    try {

      const parts = estimativaEntrega.split('/');
      const dataFormatada = `${parts[2]}-${parts[1]}-${parts[0]}`;
      console.log("Data de entrega:", dataFormatada);

      const dataObj = parseISO(dataFormatada);
      console.log("Data de entrega:", dataObj);

      const response = await axios.put(`http://localhost:8080/pedidos/${id}`, {
        itens: selectedItems.map(item_id => parseInt(item_id, 10)),
        estimativa_entrega: dataObj,
        observacoes,
        status_pedido: statusPedido,
        status_pagamento: statusPagamento,
      });
      console.log(response)
      setModalOpen();
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
    }
  };


  if (isOpen) {
    return (
      <Container>
        <ModalStyle>
          <Formulario>
            <p>Editar pedido</p>
            <div>
              <p>Cliente</p>
              <input
                type="text"
                name="name"
                defaultValue={nomeCliente !== null ? nomeCliente : undefined}
                disabled={true}
              />
            </div>
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
                        <div key={selectedItem.id}>
                          <p>{selectedItem.nome}</p>
                          <p>R$ {selectedItem.valor}</p>
                        </div>
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
              <InputMask
                mask="99/99/9999"
                placeholder="Informe a data de entrega"
                type="text"
                name="estimativaEntrega"
                value={estimativaEntrega}
                onChange={handleDataEntregaChange}
              />
            </div>
            <div>
              <p>Observações</p>
              <input
                placeholder="Observações"
                type="text"
                name="observacoes"
                value={observacoes}
                onChange={handleDataEntregaChange}
              />
            </div>
            <div>
              <p>Status Pedido</p>
              <select
                value={statusPedido}
                onChange={(e) => setStatusPedido(e.target.value)}
              >
                <option value="PENDENTE">PENDENTE</option>
                <option value="PRONTO">PRONTO</option>
                <option value="FINALIZADO">FINALIZADO</option>
                <option value="CANCELADO">CANCELADO</option>
              </select>
            </div>
            <div>
              <p>Status Pagamento</p>
              <select
                value={statusPagamento}
                onChange={(e) => setStatusPagamento(e.target.value)}
              >
                <option value="PENDENTE">PENDENTE</option>
                <option value="PAGO">PAGO</option>
                <option value="CANCELADO">CANCELADO</option>
              </select>
            </div>
          </Formulario>
          <Buttons>
            <button onClick={setModalOpen}>Cancelar</button>
            <button onClick={handleSalvarClick}>Salvar</button>
          </Buttons>
        </ModalStyle>
      </Container>
    );
  }
  return null;
};

export default EditarPedido;

