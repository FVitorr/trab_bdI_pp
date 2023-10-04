import React, { useEffect, useState } from "react";

import { Container, Formulario, ListItens } from "./styles";
import Item from "../Item";
import Header from "../Header copy";

const Itens: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Formulario>
                        <p>Itens</p>
                        <input placeholder="Nome" type="text" />
                        <input placeholder="Valor" type="text" />
                        <input placeholder="Descricao" type="text" />
                        <div>
                            <button>Enviar</button>
                            <button>Limpar</button>
                        </div>
                    </Formulario>

                    <ListItens>
                        <Item name={"Bainha"} valor={"10.00"} descricao={"Bainha de roupas no geral"} />
                        <Item name={"Botão"} valor={"5.00"} descricao={"Pregar botão em roupas no geral"} />
                        <Item name={"Bainha"} valor={"10.00"} descricao={"Bainha de roupas no geral"} />
                        <Item name={"Bainha"} valor={"10.00"} descricao={"Bainha de roupas no geral"} />
                    </ListItens>
                </div>
            </ Container>
        </>
    );
};

export default Itens;
