import React, { useEffect, useState } from "react";

import { Container, InfoItem } from "./styles";

interface Props {
    name: string;
    valor: number;
    descricao: string;
}

const Item: React.FC<Props> = ({ name, valor, descricao }) => {

    return (
        <Container>
            <InfoItem>
                <p>{name}</p>
                <p>R$ {valor}</p>
                <p>{descricao}</p>
            </InfoItem>
        </Container>
    );
};

export default Item;
