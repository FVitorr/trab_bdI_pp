import React, { useState, useRef, useEffect } from "react";

import { Container, Formulario, SelectArea, SelectBtn, Down, Checkboxes, OverSelect } from "./styles";
import Header from "../../Header copy";
import PedidosAbertos from "../PedidosAbertos/index";

interface Option {
  value: string;
  id: string;
  price: string;
}

const Pedidos: React.FC = () => {
  const Options: Option[] = [
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

  const [expanded, setExpanded] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const labelCSS = {
    border: "1px solid black",
    marginTop: "0.5rem",
    color: "black",
    display: "grid",
    gridTemplateColumns: "0.5fr 0.5fr 1.5fr 2fr",
    justifyItems: "start", // Alinha os itens à esquerda
    paddingLeft: "1rem"
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Formulario>
            <p>Pedidos</p>
            <input placeholder="Cliente" type="text" />
            <SelectArea>
              <div className="selectBox" onClick={() => setExpanded(!expanded)} style={{ position: "relative" }}>
                <SelectBtn>Itens 
                <OverSelect>
                  {selectedItems.map((itemId) => {
                    const selectedItem = Options.find((option) => option.id === itemId);
                    return selectedItem ? (
                       <p key={selectedItem.id}> {selectedItem.value} </p>
                    ) : null;
                  })}
                </OverSelect>
                <Down />
                </SelectBtn>
              </div>
              {expanded && (
                <Checkboxes>
                  {Options.map((Options, index) => (
                    <label key={index} htmlFor={Options.id} style={labelCSS}>
                      <input type="checkbox" id={Options.id} checked={selectedItems.includes(Options.id)}
                  onChange={() => handleCheckboxChange(Options.id)}/> <p>{Options.id}</p> <p>{Options.value}</p> <p>{Options.price}</p>
                    </label>
                  ))}
                </Checkboxes>
              )}
            </SelectArea>

            <input placeholder="Data de entrega" type="text" />
            <input placeholder="Observações" type="text" />
            <div>
              <button>Enviar</button>
              <button>Limpar</button>
            </div>
          </Formulario>
          <PedidosAbertos />
        </div>
      </Container>
    </>
  );
};

export default Pedidos;
